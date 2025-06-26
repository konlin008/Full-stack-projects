import express from "express";
import {
  addNewNote,
  deleteNote,
  editNotes,
  fetchAllNotes,
  fetchNote,
  markAsComplete,
  markAsIncomplete,
} from "../controller/notes.controller.js";

const router = express.Router();

router.get("/ip", (req, res) => {
  res.status(200).send("hello from router");
});
router.post("/add-new-note", addNewNote);
router.get("/", fetchAllNotes);
router.get("/fetch-note/:id", fetchNote);
router.put("/:id", editNotes);
router.put("/completed/:id", markAsComplete);
router.put("/incomplete/:id", markAsIncomplete);
router.delete("/delete/:id", deleteNote);

export default router;
