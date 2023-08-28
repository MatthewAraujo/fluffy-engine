import { Router } from "express"; 
import { register } from "./register.js";
import { deleteUser } from "./delete.js";
import { getUsers } from "./get.js";

const userRoutes = Router();

userRoutes.get("/user", getUsers)

userRoutes.post("/user", register)

userRoutes.delete("/user",deleteUser )



export { userRoutes };