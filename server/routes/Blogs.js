import express from "express";
import { createNewBlog } from "../controllers/Blogs.js";

const router = express.Router();

router.post("/create-new-blog", createNewBlog);


export default router;