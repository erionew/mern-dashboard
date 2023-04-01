import express from 'express'
const taskRouter = express.Router();
import taskController from "../controllers/tasks.js";

taskRouter.get("/tasks", taskController.index);
taskRouter.post("/tasks", taskController.create);
taskRouter.put("/tasks/:id", taskController.edit);
taskRouter.delete("/task/:id", taskController.delete);

export default taskRouter;
