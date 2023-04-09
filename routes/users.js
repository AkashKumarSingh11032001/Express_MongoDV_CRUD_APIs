import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

// create a user
router.post("/", createUser);

// router.get('/',(req,res)=>{
//     res.send("Getting Users!");
// });

// router.get("/", createUser);


export default router;
