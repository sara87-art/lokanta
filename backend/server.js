const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const foodRoutes = require("./routes/FoodRoutes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
