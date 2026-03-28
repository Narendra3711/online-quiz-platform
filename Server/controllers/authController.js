const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// 🔐 REGISTER
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({ message: "User registered successfully" });
};

// 🔐 LOGIN
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "7d",
    });

    res.json({ token });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

// 🔁 FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const token = crypto.randomBytes(20).toString("hex");

  user.resetToken = token;
  user.resetTokenExpire = Date.now() + 10 * 60 * 1000;

  await user.save();

  res.json({
    message: "Reset token generated",
    token, // for testing
  });
};

// 🔁 RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpire = undefined;

  await user.save();

  res.json({ message: "Password updated successfully" });
};