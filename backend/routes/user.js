import { Router } from "express";
import * as user from "../controllers/user.js";
import validate from "../middlewares/validate.js";
import { postUser } from "./user.schema.js";

const userRoutes = Router();

userRoutes.post("/register", validate(postUser), user.create);
userRoutes.post("/login", user.login);
// registerRoutes.get("/", register.getAll);
// registerRoutes.get("/:registerId", register.getOne);
// registerRoutes.put("/:registerId", register.replace);
// registerRoutes.patch("/:registerId", register.update);
// registerRoutes.delete("/:registerId", register.deleteOne);

export default userRoutes;