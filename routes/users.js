import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Getting Users!");
});

export default router;