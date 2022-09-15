const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ideaRoute = require("./routes/ideas");

require("dotenv").config();

const app = express();
app.use(cors());

/**
 * BODY PARSER
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * IDEA ROUTE
 */
app.use("/api/ideas", ideaRoute);

/**
 * CONNECT TO MONGODB
 */
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
