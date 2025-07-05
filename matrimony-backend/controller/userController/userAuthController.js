const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("../../config/variables/variables");
const userModel = require("../../model/user/userModel");
const fs = require("fs");

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const getUserInformation = async (req, res) => {
  try {
    const { userId } = req.params;

    const userData = await userModel.findById(userId, { userPassword: 0 });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User information retrieved successfully",
      data: userData,
    });
  } catch (err) {
    console.error("Error in getting the user information", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const completeProfileData = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("req.body", req.body);

    const {
      name,
      gender,
      dateOfBirth,
      age,
      city,
      height,
      weight,
      aboutMe,
      fathersName,
      mothersName,
      address,
      jobType,
      companyName,
      salary,
      jobExperience,
      degree,
      school,
      college,
      whatsapp,
      facebook,
      instagram,
      x,
      youtube,
      linkedin,
      password,
    } = req.body;

    let hobbies = req.body.hobbies;
    if (hobbies && !Array.isArray(hobbies)) hobbies = [hobbies];

    const files = req.files;
    const updates = {
      userName: name,
      gender,
      dateOfBirth,
      age,
      city,
      height,
      weight,
      fathersName,
      mothersName,
      aboutMe,
      address,
      jobType,
      companyName,
      salary,
      jobExperience,
      degree,
      school,
      college,
      whatsapp,
      facebook,
      instagram,
      x,
      youtube,
      linkedin,
      hobbies,
    };

    // ✅ Only update password if provided
    if (password && password.trim() !== "") {
      updates.userPassword = await bcrypt.hash(password, 10);
    }

    // ✅ Upload profile image to Cloudinary
    if (files?.profileImage?.[0]) {
      const profile = await cloudinary.uploader.upload(
        files.profileImage[0].path,
        {
          folder: `matrimony/users/${userId}/profileImage`,
        }
      );
      updates.profileImage = profile.secure_url;
      fs.unlinkSync(files.profileImage[0].path);
    }

    // ✅ Upload additional images to Cloudinary
    if (files?.additionalImages?.length) {
      const uploadResults = await Promise.all(
        files.additionalImages.map((file) =>
          cloudinary.uploader.upload(file.path, {
            folder: `matrimony/users/${userId}/additionalImages`,
          })
        )
      );
      updates.additionalImages = uploadResults.map((img) => img.secure_url);
      files.additionalImages.forEach((file) => fs.unlinkSync(file.path));
    }

    console.log("🔄 Updates to apply:", updates);

    const updatedUser = await userModel.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.error("❌ Error in profile update:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getUserProfileImage = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch only the profileImage field of the user
    const userImage = await userModel.findById(userId, {
      profileImage: 1,
      userName: 1,
      userMobile: 1,
    });

    if (!userImage) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Send back the image URL or data
    res.status(200).json({
      success: true,
      message: "Profile image retrieved successfully",
      data: userImage,
    });
  } catch (err) {
    console.error("Error fetching user profile image:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the profile image",
    });
  }
};

const getAllUserProfileData = async (req, res) => {
  try {
    const { userId } = req.params;

    const userData = await userModel.find(
      { _id: { $ne: userId } },
      { userPassword: 0 }
    );

    res.status(200).json({
      success: true,
      message: "All users excluding the current user fetched successfully",
      data: userData,
    });
  } catch (err) {
    console.log("Error in getAllUserProfileData:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProfileMoreInformation = async (req, res) => {
  try {
    const { profileId } = req.params;

    const profileData = await userModel.findById(
      { _id: profileId },
      { userPassword: 0 }
    );

    if (!profileData) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile data fetched successfully",
      data: profileData,
    });
  } catch (err) {
    console.log("Error in getting the more details of the profile", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getUserProfileImage,
  getUserInformation,
  completeProfileData,
  getAllUserProfileData,
  getProfileMoreInformation,
};
