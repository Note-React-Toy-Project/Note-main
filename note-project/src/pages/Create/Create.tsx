import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Create.module.css";
import Button from "../../components/commons/Button/Button";

const Create = () => {
  const handleRemoveNote = () => {
    console.log("remove note");
  };
  const handleDoneClick = () => {
    console.log("done click");
  };
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <button className={styles.backBtn}>
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
      </nav>
      <main className={styles.main}>
        <input type="text" className={styles.title} placeholder="제목을 입력하세요." />
        <textarea className={styles.content} placeholder="내용을 입력하세요." />
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
