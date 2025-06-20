import express from "express";
import {
  addNewNote,
  deleteNote,
  editNotes,
  fetchAllNotes,
  markAsComplete,
  markAsIncomplete,
} from "../controller/notes.controller.js";

const router = express.Router();

router.get("/ip", (req, res) => {
  res.status(200).send("hello from router");
});
router.post("/add-new-note", addNewNote);
router.get("/", fetchAllNotes);
router.put("/:id", editNotes);
router.put("/completed/:id", markAsComplete);
router.put("/incomplete/:id", markAsIncomplete);
router.put("/delete/:id", deleteNote);

export default router;
