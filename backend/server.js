import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
import registerRoutes from "./routes/user.js"
import cors from "cors";
import logMiddleware from "./middlewares/log.js";

const app = express();

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logMiddleware);
app.use(cors({origin: "*"}))
app.use(express.json());

app.use("/user/register",  registerRoutes);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).end();
});


