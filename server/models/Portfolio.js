import mongoose from "mongoose";

const portfolioSchema = mongoose.Schema({
    bannerImage: String,
    bannerText: String,


    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Portfolio = mongoose.model("portfolio", portfolioSchema);

export default Portfolio;