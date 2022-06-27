// @desc Get doers
//@route GET /api/goals -
//@access Private

const getDoers = (req, res) => {
  res.status(200).json({ message: "Get doer" });
};



// @desc Set doers
//@route POST /api/goals -
//@access Private


const setDoer = (req, res) => {
    res.status(200).json({ message: "Set doer" });
};

// @desc Update doers
//@route PUT /api/goals/:id
//@access Private

const updateDoer = (req, res) => {
    res.status(200).json({ message: `Update doer ${req.params.id}` });
}


// @desc Delete doers
//@route PUT /api/goals/:id
//@access Private

const deleteDoer = (req, res) => {
    res.status(200).json({ message: "Delete doer" });
  }

module.exports = {
    getDoers,
    setDoer,
    updateDoer,
    deleteDoer
  };
