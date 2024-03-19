const { Router } = require("express");
const router = Router();
const dotenv = require("dotenv");
const multer = require("multer");
const upload = multer();
const imgbbUploader = require("imgbb-uploader");

dotenv.config({
  path: "./.env",
});

router.post("/upload", upload.single("image"), async (req, res, next) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: "No image data provided" });
    }

    const options = {
      apiKey: process.env.IMGBB_KEY,
      base64string: file.buffer.toString("base64"),
    };

    const result = await imgbbUploader(options);

    res.json({ url: result.image.url });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
