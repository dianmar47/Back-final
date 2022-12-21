const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

router.get("/", productController.getProductHome);
router.get("/:id", authMiddleware, productController.getProduct);
router.get("/id/:id", authMiddleware, productController.getProductById);
router.post("/", authMiddleware, productController.createProduct);
router.put("/:id", authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
