const express = require("express");
const route = express.Router();

const categoryController = require("../controllers/categoryController");
route.get("/getAll", categoryController.getAllProduct);
route.post("/create", categoryController.createCategory);
route.put("/update/:id", categoryController.updateCategory);
route.delete("/delete/:id", categoryController.deleteCategory);
module.exports = route;