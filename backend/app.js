import express from "express";
import taskRoute from "./routes/taskRoute.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

//Middleware
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//Routes
app.use("/api/v1/tasks", taskRoute);

export default app;
