const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.status(200).json({ url: "/" });
});

route.get("/about", (req, res, next) => {
  res.status(200).json({ url: "/about" });
});

module.exports = route;
