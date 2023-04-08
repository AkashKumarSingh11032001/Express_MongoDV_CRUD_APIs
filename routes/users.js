import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send("Getting Users!");
// });

router.post("/", createUser);

export default router;
