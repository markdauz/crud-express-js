const express = require("express");

const route = require("./routes");
const db = require("./config/db");

require("dotenv").config();

const app = express();

const uri = process.env.MONGODB_URI;

db.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Index route
 */
app.use("/", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
