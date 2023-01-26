import { Router } from "express";
import * as register from "../controllers/user.js";
// import validate from "../middlewares/validate.js";
// import { postSchema, getSchema, getAllSchema, deleteSchema } from "./photo.schema.js";

const registerRoutes = Router();

registerRoutes.post("/", register.create);
// registerRoutes.get("/", register.getAll);
// registerRoutes.get("/:registerId", register.getOne);
// registerRoutes.put("/:registerId", register.replace);
// registerRoutes.patch("/:registerId", register.update);
// registerRoutes.delete("/:registerId", register.deleteOne);

export default registerRoutes;