const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to database");
});
app.listen(8800, (req, res) => {
  console.log("Backend Server Running");
});
