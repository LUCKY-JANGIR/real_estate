const mongoose =require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const mongoURI = process.env.MONGO_URI;

module.exports = dbconnect =async()=> {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }    
}