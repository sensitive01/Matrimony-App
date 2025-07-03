const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const userModel = require("../../model/user/userModel");

const saveSignUpData = async (req, res) => {
  try {
    const { formData } = req.body;

    console.log("FormData", formData);

    const { name, email, phone, password, agree } = formData;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ userEmail: email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      userName: name,
      userEmail: email,
      userMobile: phone,
      userPassword: hashedPassword,
      isTermsAggreed: agree,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error in saving the signup data", err);
    res.status(500).send("Error in saving the signup data");
  }
};

const verifyLogin = async (req, res) => {
  try {
    const { formData } = req.body;
    const { email, password, rememberMe } = formData;

    console.log("formData", formData);

    const user = await userModel.findOne({ userEmail: email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // if (!user.isEmailVerified) {
    //   return res
    //     .status(403)
    //     .json({ message: "Please verify your email before logging in" });
    // }

    return res.status(200).json({
      message: "Login successful",
      userId:user._id,
      rememberMe,
    });
  } catch (err) {
    console.error("Error in verifying login", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  saveSignUpData,
  verifyLogin,
};
