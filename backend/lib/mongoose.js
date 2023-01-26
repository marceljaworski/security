import dotenv from "dotenv";
dotenv.config();
import "./lib/mongoose.js";

import mongoose from "mongoose";
mongoose.set('strictQuery', false);

mongoose.connect(
    process.env.MONGODB_URI,
    {
        dbName: process.env.DATABASE,
    }
);

mongoose.connection.on("error", error => console.error(error));
mongoose.connection.on("connection", () => console.log("connected via mongoose"));
