import { useEffect, useRef, useState } from "react";
import styles from "./Title.module.css";

const TItle = () => {
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">("light-mode");
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.body as HTMLBodyElement;
  });

  function handleBtnClick() {

    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);

    if (bodyRef.current) {
      bodyRef.current.setAttribute("data-theme", newTheme);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HB's Notes App</h1>
      <span className={styles.span}>나만의 노트를 생성해보세요!</span>
      <div
        onClick={handleBtnClick}
        className={theme === 'light-mode'? styles.toggleBtn : styles.toggleBtnClick}
      >
        토글버튼입니다
      </div>
    </div>
  );
};

export default TItle;
