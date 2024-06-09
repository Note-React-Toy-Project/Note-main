import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Create.module.css";
import Button from "../../components/commons/Button/Button";
import useCreate from "../../hooks/useCreate";

const Create = () => {
  const {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleDoneClick,
  } = useCreate();
  const handleRemoveNote = () => {
    console.log("remove note");
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
          value={title}
          className={styles.title}
          placeholder="제목을 입력하세요."
          onChange={handleTitleChange}
        />
        <textarea
          value={content}
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
