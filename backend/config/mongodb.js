import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;