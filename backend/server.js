const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/api/doers", require("./routes/doerRoutes"));

app.listen(port, () => console.log(`Server start on port ${port}`));
