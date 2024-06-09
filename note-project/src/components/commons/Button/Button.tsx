import { ButtonType } from "../../../interface/ButtonType";
import styles from "./Button.module.css";

const Button = ({ text, onClick, backgroundColor }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor }}
    >
      {text}
    </button>
  );
};

export default Button;
