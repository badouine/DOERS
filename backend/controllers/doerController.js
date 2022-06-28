const asyncHandler = require('express-async-handler');

// @desc Get doers
//@route GET /api/goals -
//@access Private

const getDoers = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get doers" });
});



// @desc Set doers
//@route POST /api/goals -
//@access Private


const setDoer = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set doer" });
});

// @desc Update doers
//@route PUT /api/goals/:id
//@access Private

const updateDoer = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update doer ${req.params.id}` });
})


// @desc Delete doers
//@route PUT /api/goals/:id
//@access Private

const deleteDoer = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete doer ${req.params.id}` });
  })

module.exports = {
    getDoers,
    setDoer,
    updateDoer,
    deleteDoer
  };
