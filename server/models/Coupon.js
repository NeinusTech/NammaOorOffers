const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    minPurchase: {
      type: Number,
      min: 0,
      default: 0,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    issuedDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    usageLimit: {
      type: Number,
      default: 1,
      min: 1,
    },
    redemptionCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    categories: [
      {
        type: String,
        trim: true,
      },
    ],
    terms: [
      {
        type: String,
        trim: true,
        maxlength: 300,
      },
    ],
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StoreInfo",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, // includes createdAt and updatedAt
  }
);

module.exports = mongoose.model("Coupon", couponSchema);
