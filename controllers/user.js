import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } 
  catch(err) {
    res.json({ error: err });
  }

  //   res.send("Creating NEW user");
};
