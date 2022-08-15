import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    title: String,
    image: String,

    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Blogs = mongoose.model("blogs", blogsSchema);

export default Blogs;