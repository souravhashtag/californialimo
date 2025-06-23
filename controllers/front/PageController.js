const Page = require("../../models/Page");
const Seo = require("../../models/Seo");


class PageController {
    static getPageDetails = async (req, res) => {
        try {
            const { pageslug } = req.params
            const page = await Page.findOne({ pageslug });
            if (!page) {
                return res.status(404).json({ message: "Page not found" });
            }
            
            const seo = await Seo.findOne({ page: page._id });
            res.status(200).json({ page, seo });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };



    static createPage = async (req, res) => {
        try {
            const { title, pageslug, pagedata, page } = req.body;


            const existing = await Page.findOne({ pageslug });
            if (existing) return res.status(400).json({ message: "Page already exists" });

            const newPage = new Page({ title, pageslug, pagedata, page });
            await newPage.save();

            res.status(201).json({ message: "Page created", page: newPage });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };




    static editPage = async (req, res) => {
        try {
            const { id } = req.params;
            const { title, pageslug, pagedata, page } = req.body;

            const updatedPage = await Page.findByIdAndUpdate(
                id,
                { title, pageslug, pagedata, page },
                { new: true, runValidators: true }
            );

            if (!updatedPage) {
                return res.status(404).json({ message: "Page not found" });
            }

            res.status(200).json({ message: "Page updated", page: updatedPage });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };




    static deletePage = async (req, res) => {
        try {
            const { id } = req.params;

            const deletedPage = await Page.findByIdAndDelete(id);

            if (!deletedPage) {
                return res.status(404).json({ message: "Page not found" });
            }

            res.status(200).json({ message: "Page deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };



}
module.exports = PageController;