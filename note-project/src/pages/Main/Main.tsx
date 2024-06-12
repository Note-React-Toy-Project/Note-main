import { useEffect, useState } from "react";
import Note from "../../components/Note/Note";
import styles from "./Main.module.css";
import { getNotes } from "../../utils/storageNote";
import Button from "../../components/commons/Button/Button";
import { useNavigate } from "react-router-dom";
import { NoteType } from "../../interface/NoteType";

const Main = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const notes = getNotes();
    setNotes(notes);
  }, []);
  const handleCreateClick = () => {
    navigate("/write");
  };
  return (
    <div className={styles.noteContainer}>
      <ul className={styles.ul}>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <Note note={note} />
            </li>
          );
        })}
      </ul>
      <footer className={styles.footer}>
        <Button
          text="Create Note"
          onClick={handleCreateClick}
          backgroundColor="#4870d4"
        />
      </footer>
    </div>
  );
};

export default Main;
