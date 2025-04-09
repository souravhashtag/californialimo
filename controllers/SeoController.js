const Seo = require("../models/Seo");
const dotenv = require("dotenv");

dotenv.config();
class SeoController{
    static list = async (req, res) => {
        try {
            const seo = await Seo.find().populate("page", "page");            
            res.status(200).json(seo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static add = async (req, res) => {
        try {
            const {page,title,keyword,description,canonical} = req.body;
            const existingSeo = await Seo.findOne({ _id:page });
        if (existingSeo) {
            return res.status(400).json({ error: "Page already exists. Please use a different slug." });
        }
            const seo =  new Seo({
                page:page,
                title:title??"",
                keyword:keyword??"",
                description:description??"",
                canonical:canonical??""
            });
            const savedSeo = await seo.save();            
            res.status(200).json(savedSeo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static details = async (req, res) => {
        try {
            const {id} = req.params;
            const seo = await Seo.findOne({_id:id}).populate("page", "page");            
            res.status(200).json(seo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static update = async (req, res) => {
        try {
            const {id} = req.params;
            const {title,keyword,description,canonical} = req.body;
            
            const seo = await  Seo.findOneAndUpdate(
                {_id:id},
                {
                    title:title,
                    keyword:keyword??"",
                    description:description??"",
                    canonical:canonical??""
                }
            );
            const savedSeo = await seo.save();            
            res.status(200).json(savedSeo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
}
module.exports = SeoController