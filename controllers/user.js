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

// get all users
export const getAllUser = async (req, res) =>{
  try{
    const user = await User.find({})
    res.status(201).json(user);
  }catch(err){
    res.json({error:err});
  }
}

// get user by id
export const getUser = async (req,res) =>{
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.json({ error: err });
  }
}

// update user by ID
export const updateUser = async (req,res) =>{
  try {
    const userUpdate = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.status(200).json(userUpdate);
  } catch (err) {
    res.json({ error: err });
  }
}
