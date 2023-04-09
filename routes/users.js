import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

// create a user
router.post("/", createUser);

// get all user
router.get("/", getAllUser)

// get user by ID
router.get("/:userId",getUser)

// update user by ID
router.patch("/:userId", updateUser);

// deleter user by ID
router.delete("/:userId", deleteUser);

// router.get('/',(req,res)=>{
//     res.send("Getting Users!");
// });

// router.get("/", createUser);


export default router;
