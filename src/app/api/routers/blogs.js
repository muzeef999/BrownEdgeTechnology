import express from "express";
import { blog } from "../controllers/blogcontroller.js";

const blogs = express.Router();

blogs.post("/blogs", blog);

export default blogs;
