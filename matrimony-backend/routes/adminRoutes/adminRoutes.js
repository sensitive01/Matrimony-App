const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../../controller/adminController/adminController");

adminRoutes.get("/",adminController.registerAdmin);
adminRoutes.get("/get-all-users",adminController.getAllUsersData);
adminRoutes.get("/get-all-new-requested-users",adminController.getAllNewRequestedUsersData);






adminRoutes.post("/verify-admin",adminController.verifyAdmin);


module.exports = adminRoutes;
