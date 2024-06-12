import { useEffect, useRef, useState } from "react";
import styles from "./Title.module.css";

const TItle = () => {
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">("light-mode");
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.body as HTMLBodyElement;
  });

  const handleBtnClick = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);

    if (bodyRef.current) {
      bodyRef.current.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>HB's Notes</h1>
        <span className={styles.span}>인생은 기록입니다롱 푸하하</span>
      </div>

      <img
        onClick={handleBtnClick}
        className={styles.toggleBtn}
        src={theme === "light-mode" ? "toggle_on.svg" : "toggle_off.svg"}
      ></img>
    </div>
  );
};

export default TItle;
