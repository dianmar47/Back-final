const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
/*
router.get("/", (req, res) => {
  res.json({ msg: "get json" });
});

router.post("/", (req, res) => {
  res.json({ msg: "post json" });
});

router.put("/", (req, res) => {
  res.json({ msg: "put json" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "delete json" });
});
*/
module.exports = router;
