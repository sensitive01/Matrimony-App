const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("../../config/variables/variables");
const userModel = require("../../model/user/userModel");
const interestModel = require("../../model/user/interestModel");
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
      religion,
      state,
      pincode,

      diet,
      smoking,
      drinking,
      exercise,

      desiredAgeFrom,
      desiredAgeTo,
      desiredReligion,
      desiredCaste,
      desiredEducation,
      desiredLocation,
      desiredHeightFrom,
      desiredHeightTo,
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
      religion,
      state,
      pincode,
      diet,
      smoking,
      drinking,
      exercise,

      desiredAgeFrom,
      desiredAgeTo,
      desiredReligion,
      desiredCaste,
      desiredEducation,
      desiredLocation,
      desiredHeightFrom,
      desiredHeightTo,
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

    // Get current user's gender
    const currentUser = await userModel.findById(userId, { gender: 1 });
    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const userGender = currentUser.gender;

    // Find all users excluding same gender and current user
    const userData = await userModel.find(
      {
        _id: { $ne: userId },
        gender: { $ne: userGender },
      },
      { userPassword: 0 }
    );

    res.status(200).json({
      success: true,
      message: "All opposite-gender users fetched successfully",
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

const getAllUserProfileDataHome = async (req, res) => {
  try {
    const userData = await userModel.find({}, { userPassword: 0 });

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

const showUserInterests = async (req, res) => {
  try {
    const { userId } = req.params;
    const { interestData } = req.body;

    const { targetUser, permissions, message } = interestData;

    // Check if any interest already exists between the two users
    const existingInterest = await interestModel.findOne({
      senderId: userId,
      targetUserId: targetUser,
    });

    if (existingInterest) {
      // Update existing interest (status becomes 'pending' again)
      existingInterest.status = "pending";
      existingInterest.message = message;
      existingInterest.sharedSections = {
        about: permissions.about || false,
        photoGallery: permissions.photo || false,
        contactInfo: permissions.contact || false,
        personalInfo: permissions.personal || false,
        hobbies: permissions.hobbies || false,
        socialMedia: permissions.social || false,
      };

      await existingInterest.save();

      return res.status(200).json({
        success: true,
        message: "Interest request updated successfully",
        interestId: existingInterest._id,
      });
    }

    // Create new interest
    const newInterest = new interestModel({
      senderId: userId,
      targetUserId: targetUser,
      message: message,
      sharedSections: {
        about: permissions.about || false,
        photoGallery: permissions.photo || false,
        contactInfo: permissions.contact || false,
        personalInfo: permissions.personal || false,
        hobbies: permissions.hobbies || false,
        socialMedia: permissions.social || false,
      },
      status: "pending",
    });

    await newInterest.save();

    return res.status(200).json({
      success: true,
      message: "Interest sent successfully",
      interestId: newInterest._id,
    });
  } catch (err) {
    console.error("Error in saving the user interest", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send interest",
    });
  }
};

const getInterestedProfileRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const { reqStatus } = req.body;

    if (!userId || !reqStatus) {
      return res.status(400).json({
        success: false,
        message: "Missing userId or request status",
      });
    }

    const interests = await interestModel.find(
      {
        targetUserId: userId,
        status: reqStatus,
      },
      { sharedSections: 0 }
    );

    const senderIds = interests.map((item) => item.senderId);

    const senderDetails = await userModel.find(
      { _id: { $in: senderIds } },
      "userName profileImage city age gender jobType height"
    );

    const mergedData = interests.map((interest) => {
      const sender = senderDetails.find(
        (u) => u._id.toString() === interest.senderId
      );
      return {
        ...interest.toObject(),
        senderDetails: sender || null,
      };
    });

    return res.status(200).json({
      success: true,
      message: "Interested profiles fetched successfully",
      data: mergedData,
    });
  } catch (err) {
    console.log("Error in getting the interested profile request", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const changeInterestStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { reqStatus, profileId } = req.body;
    console.log(userId, reqStatus, profileId);

    if (!userId || !reqStatus || !profileId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const interest = await interestModel.findOneAndUpdate(
      { targetUserId: userId, senderId: profileId },
      { status: reqStatus },
      { new: true }
    );

    if (!interest) {
      return res.status(404).json({
        success: false,
        message: "Interest request not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Interest status updated to '${reqStatus}'`,
      data: interest,
    });
  } catch (err) {
    console.log(
      "Error in changing the status of the interested profile request",
      err
    );
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getNewProfileMatches = async (req, res) => {
  try {
    const { userId } = req.params;

    const currentUser = await userModel.findById(userId);
    if (!currentUser)
      return res.status(404).json({ message: "User not found" });

    const {
      gender,
      desiredAgeFrom,
      desiredAgeTo,
      desiredReligion,
      desiredCaste,
      desiredLocation,
      desiredHeightFrom,
      desiredHeightTo,
    } = currentUser;

    const oppositeGender = gender === "Male" ? "Female" : "Male";

    // Calculate DOB range
    const currentYear = new Date().getFullYear();
    const minDOB = new Date(currentYear - Number(desiredAgeTo), 0, 1);
    const maxDOB = new Date(currentYear - Number(desiredAgeFrom), 11, 31);

    const filters = [
      { dateOfBirth: { $gte: minDOB, $lte: maxDOB } },
      desiredReligion ? { religion: desiredReligion } : null,
      desiredCaste ? { caste: desiredCaste } : null,
      desiredLocation ? { city: desiredLocation } : null,
      desiredHeightFrom && desiredHeightTo
        ? { height: { $gte: desiredHeightFrom, $lte: desiredHeightTo } }
        : null,
    ].filter(Boolean);

    const rawMatches = await userModel
      .find({
        _id: { $ne: userId },
        gender: oppositeGender,
        $or: filters,
      })
      .limit(5);

    // Return only selected fields + calculated age
    const matches = rawMatches.map((user) => {
      const dob = new Date(user.dateOfBirth);
      const age = new Date().getFullYear() - dob.getFullYear();

      return {
        _id: user._id,
        userName: user.userName,
        profileImage: user.profileImage,
        city: user.city,
        age,
      };
    });

    console.log("matches", matches);

    res.status(200).json({ matches });
  } catch (err) {
    console.error("Error in getting the new profile matches", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSearchedProfileData = async (req, res) => {
  try {
    console.log(req.body)
    const { formData } = req.body;
    const { lookingFor, age, community, city } = formData;

    // Always include only approved users
    const filters = {};

    // Dynamically add filters only if values are present
    if (lookingFor) filters.gender = lookingFor;
    if (community) filters.religion = community;
    if (city) filters.city = city;
    if (age) filters.age = parseInt(age); // exact age match



    const users = await userModel.find(filters, {
      _id: 1,
      userName: 1,
      profileImage: 1,
      city: 1,
      age: 1,
      gender: 1,
      religion: 1,
    });


    const results = users.map((user) => ({
      _id: user._id,
      userName: user.userName,
      profileImage: user.profileImage,
      city: user.city,
      age: user.age,
      gender: user.gender,
      religion: user.religion,
    }));

    res.status(200).json({ success: true, data: results });
  } catch (err) {
    console.error("Error in getSearchedProfileData:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getSearchedProfileData,
  getNewProfileMatches,
  getAllUserProfileDataHome,
  changeInterestStatus,
  getInterestedProfileRequest,
  getUserProfileImage,
  getUserInformation,
  completeProfileData,
  getAllUserProfileData,
  getProfileMoreInformation,
  showUserInterests,
};
