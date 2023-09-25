const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require("../controllers/userController");
const Userrouter = express.Router();

Userrouter.route("/register").post(registerUser);
Userrouter.route("/login").post(loginUser);

Userrouter.route("/password/forgot").post(forgotPassword)
Userrouter.route("/logout").post(logoutUser);

module.exports = Userrouter;
