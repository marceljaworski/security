import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/user.js"
import cors from "cors";
import cookieParser from "cookie-parser"

import logMiddleware from "./middlewares/log.js";
import "./lib/mongoose.js";
const app = express();

const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logMiddleware);
app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(express.json());
app.use(cookieParser())

app.use("/user", userRoutes);


app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).end();
});


