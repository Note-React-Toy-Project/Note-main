import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Create.module.css";
import Button from "../../components/commons/Button/Button";
import useChange from "../../hooks/useChange";
import { saveNote } from "../../utils/storageNote";

const Create = () => {
  const { title, content, handleTitleChange, handleContentChange } =
    useChange();
  const handleRemoveNote = () => {
    console.log("remove note");
  };
  const handleDoneClick = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("빈칸을 정확히 입력해주세요.");
      return;
    }
    if (title && content) {
      const newNote = { title, content };
      saveNote(newNote);
    }
  };
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <button className={styles.backBtn}>
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
      </nav>
      <main className={styles.main}>
        <input
          type="text"
          className={styles.title}
          placeholder="제목을 입력하세요."
          onChange={handleTitleChange}
        />
        <textarea
          className={styles.content}
          placeholder="내용을 입력하세요."
          onChange={handleContentChange}
        />
      </main>
      <footer className={styles.footer}>
        <Button
          text="Remove Note"
          onClick={handleRemoveNote}
          backgroundColor="#d13030"
        />
        <Button
          text="Done"
          onClick={handleDoneClick}
          backgroundColor="#4870d4"
        />
      </footer>
    </section>
  );
};

export default Create;
