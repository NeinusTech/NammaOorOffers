const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  getCouponById,
  editCoupon,
  deleteCoupon, 
  getCouponsByStore,
  getCouponByStoreAndId,
  redeemCoupon,
  getUserRedeemedCoupons,
  getRedeemedCouponsByStore,
  markRedeemedCouponAsUsed,
} = require("../controllers/couponController");

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Protected Store-only routes
router.post("/create/:storeId", protect, authorizeRoles("store"), createCoupon);
router.put("/edit/:couponId", protect, authorizeRoles("store"), editCoupon);
router.delete("/delete/:couponId", protect, authorizeRoles("store"), deleteCoupon);

// ✅ Store-specific routes
router.get("/store/:storeId", protect, authorizeRoles("store"), getCouponsByStore);
router.get("/store/:storeId/coupon/:couponId", protect, authorizeRoles("store"), getCouponByStoreAndId);

// ✅ Public routes
router.get("/", getAllCoupons);
router.get("/view/:couponId", getCouponById);

// ✅ Coupon redemption routes
router.post("/redeem", protect, authorizeRoles("user"), redeemCoupon); // userId in body
router.get("/redeemed/user/:userId",protect, authorizeRoles("user"), getUserRedeemedCoupons);
router.get("/redeemed/store/:storeId", protect, authorizeRoles("store", "admin"), getRedeemedCouponsByStore);
router.put("/redeemed/:userId/:redeemedCouponId", protect, authorizeRoles("store", "admin"), markRedeemedCouponAsUsed);

module.exports = router;
