import { NoteType } from "../interface/NoteType";

export const saveNote = (note: NoteType) => {
  try {
    const storedNotes = localStorage.getItem("notes");
    const notes = storedNotes ? JSON.parse("notes") : [];
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
