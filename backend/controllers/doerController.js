const asyncHandler = require("express-async-handler");
const Doer = require("../models/doerModel");

// @desc Get doers
//@route GET /api/goals -
//@access Private

const getDoers = asyncHandler(async (req, res) => {
  const doers = await Doer.find();
  res.status(200).json(doers);
});

// @desc Set doers
//@route POST /api/goals -
//@access Private

const setDoer = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const doer = await Doer.create({
    text: req.body.text
  })
  res.status(200).json(doer);
});

// @desc Update doers
//@route PUT /api/goals/:id
//@access Private

const updateDoer = asyncHandler(async (req, res) => {
  const doer = await Doer.findById(req.params.id)
  if(!doer){ 
    res.status(400)
    throw new Error('Doer not found')
  }
  const updatedDoer = await Doer.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
  })
  res.status(200).json(updatedDoer);
});

// @desc Delete doers
//@route PUT /api/goals/:id
//@access Private

const deleteDoer = asyncHandler(async (req, res) => {
  const doer = await Doer.findById(req.params.id)
  if(!doer){ 
    res.status(400)
    throw new Error('Doer not found')
  }
  await doer.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getDoers,
  setDoer,
  updateDoer,
  deleteDoer,
};
