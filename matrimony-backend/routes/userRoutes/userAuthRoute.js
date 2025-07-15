const express = require("express");
const multer = require("multer");

const userAuthRoutes = express.Router();
const userAuthController = require("../../controller/userController/userAuthController")

const upload = multer({ dest: "uploads/" });




userAuthRoutes.get("/get-user-info/:userId",userAuthController.getUserInformation)
userAuthRoutes.get("/get-user-profile/:userId",userAuthController.getUserProfileImage)
userAuthRoutes.get("/get-all-user-profile/:userId",userAuthController.getAllUserProfileData)
userAuthRoutes.get("/get-all-user-profile-home",userAuthController.getAllUserProfileDataHome)
userAuthRoutes.get("/new-profile-matches/:userId",userAuthController.getNewProfileMatches)


userAuthRoutes.get("/get-profile-more-information/:profileId",userAuthController.getProfileMoreInformation)


userAuthRoutes.post("/get-interested-profile-request/:userId",userAuthController.getInterestedProfileRequest)
userAuthRoutes.post("/show-user-interests/:userId",userAuthController.showUserInterests)
userAuthRoutes.put("/change-interest-status/:userId",userAuthController.changeInterestStatus)


userAuthRoutes.post("/complete-profile-data/:userId",upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "additionalImages", maxCount: 10 },
  ]),userAuthController.completeProfileData)


module.exports = userAuthRoutes;