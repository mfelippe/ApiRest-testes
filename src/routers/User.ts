import { Router } from "express";
import { createUser } from "../services/createUser";
import { deleteUser } from "../services/deleteUser";
import { getAllUsers } from "../services/getAllUsers";
import { updateUser } from "../services/updateUser";

const userRouter = Router();
userRouter.get("/all", getAllUsers);
userRouter.post("/novo", createUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete", deleteUser);

export { userRouter };
