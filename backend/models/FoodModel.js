const db = require("../config/db");


const getAllFoods = (callback) => {
  const sql = "SELECT * FROM foods";

  db.query(sql, callback);
};


const createFood = (
  name,
  description,
  price,
  image,
  category,
  callback
) => {
  const sql = `
    INSERT INTO foods
    (name, description, price, image, category)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, price, image, category],
    callback
  );
};


const updateFood = (
  id,
  name,
  description,
  price,
  image,
  category,
  callback
) => {
  const sql = `
    UPDATE foods
    SET
      name = ?,
      description = ?,
      price = ?,
      image = ?,
      category = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, description, price, image, category, id],
    callback
  );
};


const deleteFood = (id, callback) => {
  const sql = "DELETE FROM foods WHERE id = ?";

  db.query(sql, [id], callback);
};

module.exports = {
  getAllFoods,
  createFood,
  updateFood,
  deleteFood,
};