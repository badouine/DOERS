const express = require("express");
const { set } = require("mongoose");
const router = express.Router();
const {
  getDoers,
  setDoer,
  updateDoer,
  deleteDoer,
} = require("../controllers/doerController");


router.route('/').get(getDoers).post(setDoer);
router.route('/:id').delete(deleteDoer).put(updateDoer);

module.exports = router;
