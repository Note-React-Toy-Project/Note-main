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

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};
export const saveFavorites = (noteId: NoteType) => {
  const notes = getNotes();
  const clickedNoteIndex = notes.findIndex((n) => n.id === noteId);
  if (clickedNoteIndex >= 0) {
    notes[clickedNoteIndex].isFavorite = !notes[clickedNoteIndex].isFavorite;
    localStorage.setItem("notes", JSON.stringify(notes));
  }
};
