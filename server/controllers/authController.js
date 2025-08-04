// controllers/authController.js

const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
import User from "../models/User.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // بررسی وجود ایمیل
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // هش کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ایجاد کاربر
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export { signup };
