const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
});

const {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/FoodControllers");

router.get("/", getFoods);

router.post("/", upload.single("image"), createFood);

router.put("/:id", upload.single("image"), updateFood);

router.delete("/:id", deleteFood);

module.exports = router;