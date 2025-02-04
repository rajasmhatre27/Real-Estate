import User from "../models/user.models.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Hash the password before saving
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
