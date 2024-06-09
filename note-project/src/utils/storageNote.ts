import { NoteType } from "../interface/NoteType";
import { v4 as uuidv4 } from "uuid";

export const saveNote = (note: NoteType) => {
  console.log(note);
  try {
    const storedNotes = localStorage.getItem("notes");
    const notes = storedNotes ? JSON.parse(storedNotes) : [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } catch (error) {
    console.log(error);
  }
};

export const getNotes = () => {
  try {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
