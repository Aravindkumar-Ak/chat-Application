import express from "express";
import protectedRoute from "../middleware/protectedRoute";

const router=express.Router();

router.get("/",protectedRoute,getUsers)

export default router;