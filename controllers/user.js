const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("../models/User");

const User = mongoose.model("user");

const createToken = (_id) => {
  //MONGODB _id
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

/**
 * LOGIN
 */
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
/**
 * SIGNUP
 */
exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
