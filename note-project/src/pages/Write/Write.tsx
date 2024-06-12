import styles from "./Write.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoteNav from "../../components/NoteNav/NoteNav";
import NoteForm from "../../components/NoteForm/NoteForm";
import { v4 as uuidv4 } from "uuid";
import { getNotes } from "../../utils/storageNote";
import { NoteType } from "../../interface/NoteType";

const Write = () => {
  const params = useParams();
  const noteId = params.id;
  const navigate = useNavigate();
  const [note, setNote] = useState<NoteType>({
    id: "",
    title: "",
    content: "",
    isFavorite: false,
    createdTime: new Date(),
    updateTime: new Date(),
  });

  useEffect(() => {
    if (noteId) {
      const notes = getNotes();
      const clickedNote = notes.find((n) => n.id === noteId);
      if (clickedNote) {
        setNote(clickedNote);
      }
    }
  }, [noteId]);

  const handleSave = (note: NoteType) => {
    const notes = getNotes();
    if (noteId) {
      const updatedNotes = notes.map((n) =>
        n.id === noteId ? { ...n, ...note, updateTime: new Date() } : n
      );

      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else {
      const newNote = {
        ...note,
        id: uuidv4(),
        isFavorite: false,
        createdTime: new Date(),
      };
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    navigate("/");
  };

  return (
    <section className={styles.container}>
      <NoteNav />
      <NoteForm note={note} onSave={handleSave} />
    </section>
  );
};

export default Write;
