import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { NoteType } from "../../interface/NoteType";
import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { saveFavorites } from "../../utils/storageNote";
import { useState } from "react";

const Note = ({ id, title, content, isFavorite }: NoteType) => {
  const [isFavoriteNow, setIsFavoriteNow] = useState(isFavorite);
  const navigate = useNavigate();

  const handleNoteClick = () => {
    navigate(`/write/${id}`);
  };
  const handleStarClick = () => {
    saveFavorites(id);
    setIsFavoriteNow(!isFavoriteNow);
  };

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper} onClick={handleNoteClick}>
        <p className={styles.titleStyle}>{title}</p>
        <p className={styles.contentStyle}>{content}</p>
      </div>
      <button onClick={handleStarClick}>
        {isFavoriteNow ? (
          <FontAwesomeIcon icon={solidStar} className={styles.star} />
        ) : (
          <FontAwesomeIcon icon={regularStar} className={styles.star} />
        )}
      </button>
    </div>
  );
};

export default Note;
