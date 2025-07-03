const express = require("express");
const userSignupRoutes = express.Router();
const userSignupController = require("../../controller/userController/userSignupController")

userSignupRoutes.post("/signup",userSignupController.saveSignUpData)
userSignupRoutes.post("/verify-login",userSignupController.verifyLogin)






module.exports = userSignupRoutes;