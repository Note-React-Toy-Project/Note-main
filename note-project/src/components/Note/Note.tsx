import { NoteType } from "../../interface/NoteType";
import styles from "./Note.module.css";

const Note: React.FC<NoteType> = (note) => {
  return (
    <div className={styles.container}>
      <p className={styles.titleStyle}>{note.title}</p>
      <p className={styles.contentStyle}>{note.content}</p>
    </div>
  );
};

export default Note;
