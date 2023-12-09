const express = require("express");
const router = express.Router();

//controlador
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getAllProducts);
router.post("/add", ProductController.createProductPost);
router.get("/:id", ProductController.getProduct);
router.post("/update", ProductController.updateProduct);
router.get("/remove/:id", ProductController.removeProduct)

module.exports = router;
