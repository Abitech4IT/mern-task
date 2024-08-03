import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateStatus,
  UpdateTask,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/create", createTask);
router.patch("/update-status/:id", updateStatus);
router.put("/edit-task/:id", UpdateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
