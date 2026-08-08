const FoodModel = require("../models/FoodModel");

const getFoods = (req, res) => {
  FoodModel.getAllFoods((err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
};
const createFood = (req, res) => {
 const {
  name,
  description,
  price,
  category
} = req.body;

const image = req.file ? req.file.filename : "";

  if (!name || !price || !category) {
    return res.status(400).json({
      message: "الاسم والسعر والقسم مطلوبين",
    });
  }

  FoodModel.createFood(
    name,
    description,
    price,
    image,
    category,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(201).json({
        message: "تمت إضافة الصنف بنجاح",
        id: result.insertId,
      });
    }
  );
};
const updateFood = (req, res) => {
  const { id } = req.params;
 const {
  name,
  description,
  price,
  category
} = req.body;

const image = req.file ? req.file.filename : null;

  if (!name || !price || !category) {
    return res.status(400).json({
      message: "الاسم والسعر والقسم مطلوبين",
    });
  }

  FoodModel.updateFood(
    id,
    name,
    description,
    price,
    image,
    category,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: "تم تعديل الصنف بنجاح",
      });
    }
  );
};
const deleteFood = (req, res) => {
  const { id } = req.params;

  FoodModel.deleteFood(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json({
      message: "تم حذف الصنف بنجاح",
    });
  });
};
module.exports = {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
};
