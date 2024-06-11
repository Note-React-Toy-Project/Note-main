import { NoteType } from "../../interface/NoteType";
import styles from "./Note.module.css";

const Note = (note: NoteType) => {
  return (
    <div className={styles.container}>
      <p className={styles.titleStyle}>{note.title}</p>
      <p className={styles.contentStyle}>{note.content}</p>
    </div>
  );
};

export default Note;
