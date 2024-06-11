import styles from "./NoteNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const NoteNav = () => {
    const navigate = useNavigate();
    
  return <nav className={styles.nav}>
  <button className={styles.backBtn} onClick={() => navigate(-1)}>
    <FontAwesomeIcon icon={faChevronLeft} /> Back
  </button>
</nav>
};

export default NoteNav;
