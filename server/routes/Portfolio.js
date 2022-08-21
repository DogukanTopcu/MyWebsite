import express from "express";
import { changePortfolio } from "../controllers/Portfolio";

const router = express.Router();

router.post("/portfolio", changePortfolio);


export default router;