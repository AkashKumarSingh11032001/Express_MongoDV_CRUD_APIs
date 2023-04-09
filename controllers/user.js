import User from "../models/User.js";

// create a user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.json({ error: err });
  }
  // res.send("Creating NEW user");
};
