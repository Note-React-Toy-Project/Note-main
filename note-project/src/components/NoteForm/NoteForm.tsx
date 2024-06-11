import { useEffect, useState } from "react";
import Button from "../commons/Button/Button";
import styles from "./NoteForm.module.css";
import { NoteType } from "../../interface/NoteType";

interface NoteFormType {
  note: NoteType;
  onSave: (note: NoteType) => void;
}

const NoteForm = ({ note, onSave }: NoteFormType) => {
  const [title, setTitle] = useState(note.title || "");
  const [content, setContent] = useState(note.content || "");

  useEffect(() => {
    setTitle(note.title || "");
    setContent(note.content || "");
  }, [note]);

  const handleSubmit = () => {
    onSave({ title, content });
  };
  return (
    <>
      <main className={styles.main}>
        <input
          type="text"
          value={title}
          className={styles.title}
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          className={styles.content}
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />
      </main>
      <footer className={styles.footer}>
        <Button text="Done" onClick={handleSubmit} backgroundColor="#4870d4" />
      </footer>
    </>
  );
};

export default NoteForm;
