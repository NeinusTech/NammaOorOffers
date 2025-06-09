const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      select: false,
      minlength: 6, // Enforcing password strength
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Only enforced when googleId is present
    },
    role: {
      type: String,
      enum: ["admin", "user", "store"],
      default: "user",
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
    otp: String,
    otpExpires: {
      type: Date,
      default: () => Date.now() + 10 * 60 * 1000, // default 10 min expiry
    },

    // Relationships
 storeId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "StoreInfo",
},

    coupons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
      },
    ],
    redeemedCoupons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RedeemedCoupon",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



// ✅ Virtual property to check if user is a store owner
userSchema.virtual("isStoreOwner").get(function () {
  return this.role === "store" && !!this.storeId;
});


module.exports = mongoose.model("User", userSchema);
