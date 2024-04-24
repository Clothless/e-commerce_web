const { Router } = require("express");
const router = Router();
const dotenv = require("dotenv");
const multer = require("multer");
const upload = multer();
const imgbbUploader = require("imgbb-uploader");

dotenv.config({
  path: "./.env",
});





router.post("/upload", upload.array('images'), async (req, res, next) => {
  try {
    const { files } = req;
    console.log(req.files);

    if (files.length === 0) {
      return res.status(400).json({ message: "No image data provided" });
    }

    const urls = [];
    for (const file of files) {
      const options = {
        apiKey: process.env.IMGBB_KEY,
        base64string: file.buffer.toString("base64"),
      };
      const result = await imgbbUploader(options);
      urls.push(result.url);
    }

    req.imageUrls = urls;
    res.json({ message: "Images uploaded successfully"});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
