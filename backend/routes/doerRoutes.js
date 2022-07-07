const express = require("express");
const {protect} = require('../middleware/authMiddleware')
const { set } = require("mongoose");
const router = express.Router();
const {
  getDoers,
  setDoer,
  updateDoer,
  deleteDoer,
} = require("../controllers/doerController");


router.route('/').get(protect,getDoers).post(protect,setDoer);
router.route('/:id').delete(protect,deleteDoer).put(protect,updateDoer);

module.exports = router;
