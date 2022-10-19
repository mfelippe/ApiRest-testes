import { Router } from "express";
import { userRouter } from "./User";

const routers = Router();

routers.use("/api/users", userRouter);

export default routers;
