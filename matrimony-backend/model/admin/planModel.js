// models/Plan.js
const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Basic", "Gold", "Platinum"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceType: {
      type: String,
      enum: ["Per day", "Per month", "Per Year"],
      required: true,
    },
    maxProfiles: {
      type: Number,
      required: true,
    },
    profilesType: {
      type: String,
      enum: ["Per day", "Per month", "Per Year"],
      required: true,
    },
    canViewProfiles: {
      type: String,
      enum: ["All Profiles", "Only Basic", "Only Gold", "Only Platinum"],
      required: true,
    },
    viewContactDetails: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    sendInterestRequest: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    startChat: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlanSchema", planSchema);
