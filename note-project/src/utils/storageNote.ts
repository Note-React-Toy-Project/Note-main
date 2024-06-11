import { NoteType } from "../interface/NoteType";

export const getNotes = (): NoteType[] => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

export const saveNote = (note: NoteType) => {
  const notes = getNotes();
  const existingNoteIndex = notes.findIndex((n) => n.id === note.id);
  if (existingNoteIndex >= 0) {
    notes[existingNoteIndex] = note;
  } else {
    notes.push(note);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
};
