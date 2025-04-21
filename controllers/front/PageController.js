const Page = require("../../models/Page");
const Seo = require("../../models/Seo");
const dotenv = require("dotenv");

dotenv.config();
class PageController{
    static getPageDetails = async (req, res) => {
        try {
            const{pageslug} = req.params
            const page = await Page.findOne({ pageslug });
            if (!page) {
            return res.status(404).json({ message: "Page not found" });
            }
            const seo = await Seo.findOne({ page: page._id });           
            res.status(200).json({page,seo});
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}
module.exports = PageController;