const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authController.authUser);

router.get("/", authMiddleware, authController.userAuthenticated);

module.exports = router;
