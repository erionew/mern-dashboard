import express from 'express'
const noteRouter = express.Router();
import noteController from "../controllers/notes.js";

noteRouter.get("/notes", noteController.index);
noteRouter.post("/notes", noteController.create);
noteRouter.put("/notes/:id", noteController.edit);
noteRouter.delete("/notes/:id", noteController.delete);

export default noteRouter;