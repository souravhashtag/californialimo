const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const companyDetails = require("../models/companyDetails");

let refreshTokens = [];
const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET || 'your_access_token_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret';

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return refreshToken;
}

class AuthController {
  static register = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists with this email." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)

      const user = await User.findOne({ email });
      console.log(user)
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log("isMatch",isMatch)
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const accessToken = generateAccessToken({ id: user._id });
      const refreshToken = generateRefreshToken({ id: user._id });

      res.status(200).json({ accessToken, refreshToken });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  static refreshToken = async (req, res) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(403).send("Refresh token invalid or expired");
      }

      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Refresh token expired");

        const newAccessToken = generateAccessToken({ id: user.id });
        res.json({ accessToken: newAccessToken });
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // static getAccount = async (req, res) => {
  //   try {
  //     const user = await User.findById(req.user.id).select("-password");
  //     if (!user) return res.status(404).json({ message: "User not found" });
  //     res.json({ user });
  //   } catch (err) {
  //     res.status(500).json({ message: "Server error" });
  //   }
  // };


  static getCompany = async (req, res) => {
    try {
      // 1. Verify the user
      const user = await User.findById(req.user.id).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });

      // 2. Get company details (assuming one record exists)
      const company = await companyDetails.findOne(); // Add query if needed for multi-tenant

      if (!company) return res.status(404).json({ message: "Company details not found" });

      // 3. Send response
      res.json({ user, company });

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };






  static updateUserAndCompany = async (req, res) => {
  try {
    const userId = req.user.id;
    const { user, company } = req.body;

    // === Update User ===
    const existingUser = await User.findById(userId);
    if (!existingUser) return res.status(404).json({ message: "User not found" });

    existingUser.username = user.username || existingUser.username;
    existingUser.email = user.email || existingUser.email;
    existingUser.phone = user.phone || existingUser.phone;
    existingUser.address = user.address || existingUser.address;

    await existingUser.save();

    // === Update or Create Company Details ===
    let companyData = await companyDetails.findOne();

    if (companyData) {
      companyData.companyName = company.companyName || companyData.companyName;
      companyData.companyAddress = company.companyAddress || companyData.companyAddress;
      companyData.companyPhone = company.companyPhone || companyData.companyPhone;
      companyData.companyEmail = company.companyEmail || companyData.companyEmail;
      companyData.companyLogo = company.companyLogo || companyData.companyLogo;
      await companyData.save();
    } else {
      companyData = new companyDetails(company);
      await companyData.save();
    }

    res.status(200).json({
      message: "User and company details updated successfully",
      user: {
        username: existingUser.username,
        email: existingUser.email,
        phone: existingUser.phone,
        address: existingUser.address
      },
      company: companyData
    });

  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



// static postCompanyDetails = async (req, res) => {
//   try {
//     const {
//       companyName,
//       companyAddress,
//       companyPhone,
//       companyEmail,
//       companyLogo
//     } = req.body;


//     let company = await companyDetails.findOne(); // fixed casing

//     if (company) {
//       company.companyName = companyName;
//       company.companyAddress = companyAddress;
//       company.companyPhone = companyPhone;
//       company.companyEmail = companyEmail;
//       company.companyLogo = companyLogo;
//       await company.save();

//       return res.status(200).json({ message: "Company details updated", company });
//     }

//     const newCompany = new companyDetails({
//       companyName,
//       companyAddress,
//       companyPhone,
//       companyEmail,
//       companyLogo
//     });

//     await newCompany.save();
//     return res.status(201).json({ message: "Company details saved", company: newCompany });

//   } catch (err) {
//     console.error("Error saving company details:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

  // static updateAccount = async (req, res) => {
  //   console.log(req.body)
  //   try {
  //     const updated = await User.findByIdAndUpdate(
  //       req.user.id,
  //       { $set: req.body },
  //       { new: true }
  //     ).select("-password");

  //     res.json({ user: updated });
  //   } catch (err) {
  //     res.status(500).json({ message: "Server error" });
  //   }
  // };
}

module.exports = AuthController;
