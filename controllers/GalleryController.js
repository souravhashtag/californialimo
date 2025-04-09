const Gallery = require("../models/Gallery");
const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();
class GalleryController{
    static  create = async (req , res) => {
        try{
            const {alttag} = req.body
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: "No files uploaded" });
              }
          
              const images = req.files.map((file) => file.filename);
          
              const galleryEntries = images.map((image) => ({
                alttag: alttag,
                image: image,
              }));
          
              const saveGallery = await Gallery.insertMany(galleryEntries);
          
              res.status(201).json({ message: "Images uploaded successfully", data: saveGallery }); 
        }catch(err){
            console.log(err)
        }
    }
    static list = async (req, res) => {
        try {
            const gallery = await Gallery.find();
            let galleryList = gallery?.length > 0 && gallery?.filter(val => val.image)?.map((val)=>({
                _id: val._id,
                alttag: val.alttag,
                image: `${process.env.BASEURL}${process.env.UPLOADFILEPATH}/${val.image}`,
                imagename: val.image,
            }))
            res.status(200).json(galleryList);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static delete = async (req, res) => {
        const { id } = req.params;
        try {
          const galleryItem = await Gallery.findById(id);
      
          if (!galleryItem) {
            return res.status(404).json({ error: "Image not found" });
          }      
          await Gallery.findByIdAndDelete(id);      
          const filePath = path.join(__dirname, "../uploads", galleryItem.image);
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting file:", err);
              return res.status(500).json({ error: "Error deleting image file" });
            }
          });
      
          return res.status(200).json({ message: "Image deleted successfully" });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Server error" });
        }
    };
}
module.exports = GalleryController;
