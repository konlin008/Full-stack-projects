import Note from "../models/notes.model.js";

export const addNewNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        msg: "Title or Content Field is Empty ",
      });
    }
    await Note.create({ title, content });
    res.status(200).json({
      success: true,
      msg: " Note Saved ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const fetchAllNotes = async (_, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const fetchNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    if (!noteId) {
      return res.status(400).json({
        msg: "Something Went Wrong ",
      });
    }
    const note = await Note.findOne({ _id: noteId });
    if (!note) {
      return res.status(404).json({
        msg: "Note Not Found ",
      });
    }
    res.status(200).json({
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const editNotes = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, content } = req.body;
    const note = await Note.findOne({ _id: noteId });
    if (!note) {
      return res.status(404).json({
        success: false,
        msg: "Note Not found",
      });
    }
    await Note.updateOne({ _id: noteId }, { $set: { title, content } });
    res.status(200).json({
      success: true,
      msg: "Note Updated Successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const markAsComplete = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findOne({ _id: noteId });
    if (!note) {
      return res.status(404).json({
        success: false,
        msg: "Note Not found",
      });
    }
    await Note.updateOne({ _id: noteId }, { $set: { status: true } });
    res.status(200).json({
      success: true,
      msg: "Note Marked As Completed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const markAsIncomplete = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findOne({ _id: noteId });
    if (!note) {
      return res.status(404).json({
        success: false,
        msg: "Note Not found",
      });
    }
    await Note.updateOne({ _id: noteId }, { $set: { status: false } });
    res.status(200).json({
      success: true,
      msg: "Note Marked As Incomplete",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findOne({ _id: noteId });
    if (!note) {
      return res.status(404).json({
        success: false,
        msg: "Note Not found",
      });
    }
    await Note.deleteOne({ _id: noteId });
    res.status(200).json({
      success: true,
      msg: "Note deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
