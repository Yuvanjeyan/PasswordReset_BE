const express = require("express");
const router = express.Router();

const {
  forgotPassword,
  verifyToken,
  resetPassword,
  register,
  login
} = require("../controllers/authController");

router.post("/forgot-password", forgotPassword);
router.get("/verify/:token", verifyToken);
router.post("/reset-password/:token", resetPassword);
router.post("/register", register);
router.post("/login", login);



module.exports = router;