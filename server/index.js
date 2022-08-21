import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";
const env = dotenv.config();

import blogsRouter from "./routes/Blogs.js";
import portfolioRouter from "./routes/Blogs.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION = process.env.CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => err.message);

app.use("/blogs", blogsRouter);
app.use("/portfolio", portfolioRouter);