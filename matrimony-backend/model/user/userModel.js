const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    userMobile: { type: String, required: true, unique: true, trim: true },
    userPassword: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    isTermsAggreed: { type: Boolean, default: false },
    aboutMe: { type: String },

    gender: {
      type: String,
    },
    dateOfBirth: { type: Date },
    age: { type: Number },
    city: { type: String, trim: true },
    height: { type: String },
    weight: { type: String },
    fathersName: { type: String, trim: true },
    mothersName: { type: String, trim: true },
    address: { type: String },
    religion: { type: String },
    state: { type: String },
    pincode: { type: String },

    diet: { type: String },
    smoking: { type: String },
    drinking: { type: String },
    exercise: { type: String },

    // Partner Preferences
    desiredAgeFrom: { type: String },
    desiredAgeTo: { type: String },
    desiredReligion: { type: String },
    desiredCaste: { type: String },
    desiredEducation: { type: String },
    desiredLocation: { type: String },
    desiredHeightFrom: { type: String },
    desiredHeightTo: { type: String },

    jobType: { type: String },
    companyName: { type: String },
    salary: { type: String },
    jobExperience: { type: String },

    degree: { type: String },
    school: { type: String },
    college: { type: String },

    whatsapp: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    x: { type: String },
    youtube: { type: String },
    linkedin: { type: String },

    hobbies: [{ type: String }],
    profileImage: { type: String },
    additionalImages: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserModel", userSchema);
