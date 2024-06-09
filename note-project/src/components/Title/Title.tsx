import styles from "./Title.module.css";

const TItle = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HB's Notes App</h1>
      <span className={styles.span}>나만의 노트를 생성해보세요!</span>
    </div>
  );
};

export default TItle;
