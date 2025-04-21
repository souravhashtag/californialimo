
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.header("AuthorizeToken"); 

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    if(token === process.env.FRONT_TOKEN)    
        next(); 
    else{
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};
