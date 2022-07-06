const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const colors = require("colors");

const app = express();
connectDB();
app.use(express.json());
app.use("/api/doers", require("./routes/doerRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));
