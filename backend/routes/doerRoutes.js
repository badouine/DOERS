const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get doer" });
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get doer" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update doer ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `Delete doer ${req.params.id}` });
});

module.exports = router;
