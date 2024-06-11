import styles from "./Create.module.css";
import Button from "../../components/commons/Button/Button";
import useCreate from "../../hooks/useCreate";
import { useNavigate } from "react-router-dom";
import NoteNav from "../../components/NoteNav/NoteNav";

const Create = () => {
  const {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleDoneClick,
  } = useCreate();
  const navigate = useNavigate();

  const doneBtnClick = () => {
    handleDoneClick();
    navigate("/");
  };
  return (
    <section className={styles.container}>
      <NoteNav />
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
        <Button text="Done" onClick={doneBtnClick} backgroundColor="#4870d4" />
      </footer>
    </section>
  );
};

export default Create;
