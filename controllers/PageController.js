const Page = require("../models/Page");
const multer = require("multer");
const dotenv = require("dotenv");
// const fs = require("fs");
// const path = require("path");
dotenv.config();
class PageController {
    static list = async (req, res) => {
        try {
            const page = await Page.find();
            res.status(200).json(page);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    
    static getPageDetails = async (req, res) => {
        try {
            const { pageslug } = req.params
            const page = await Page.findOne({ pageslug: pageslug });
            console.log(page)          
            res.status(200).json(page);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static updatePageDetails = async (req, res) => {
        try {
            const { pageslug } = req.params
            const { pagedata } = req.body
            const updatedPage = await Page.findOneAndUpdate(
                { pageslug },
                { pagedata: req.body },
                { new: true }
            );
            if (!updatedPage) {
                return res.status(404).json({ message: "Page not found" });
            }

            res.status(200).json(updatedPage);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}
module.exports = PageController