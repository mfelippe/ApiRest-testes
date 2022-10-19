import express from "express";
import cors from "cors";
import routers from "./routers";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(routers);

export { app };
