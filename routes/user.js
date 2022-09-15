const express = require("express");
const route = express.Router();

const userController = require("../controllers/user");

/**
 * LOGIN
 */
route.post("/login", userController.login);
/**
 * SIGNUP
 */
route.post("/signup", userController.signup);

module.exports = route;
