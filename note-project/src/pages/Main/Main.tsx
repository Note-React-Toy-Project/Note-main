import { useEffect, useState } from "react";
import Note from "../../components/Note/Note";
import styles from "./Main.module.css";
import { getNotes } from "../../utils/storageNote";
import Button from "../../components/commons/Button/Button";
import { useNavigate } from "react-router-dom";
import { NoteType } from "../../interface/NoteType";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useAtom } from "jotai";
import { sortAtom } from "../../atom";

const Main = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const navigate = useNavigate();

  const [sort] = useAtom(sortAtom);

  useEffect(() => {
    const sortedNotes = [...notes];
    if (sort == 1) {
      sortedNotes.sort(function (a: NoteType, b: NoteType) {
        if (a.createdTime && b.createdTime) {
          return (
            new Date(b.createdTime).valueOf() -
            new Date(a.createdTime).valueOf()
          );
        } else {
          return -1;
        }
      });
    } else if (sort == 2) {
      sortedNotes.sort(function (a: NoteType, b: NoteType) {
        if (a.updateTime && b.updateTime) {
          return (
            new Date(b.updateTime).valueOf() - new Date(a.updateTime).valueOf()
          );
        } else {
          return -1;
        }
      });
    }
    setNotes(sortedNotes);
    //근데 얘가 수정완료 했을 때나 생성했을때는 업데이트가 안돼 .. 클릭해야해
  }, [sort, notes.length]);

  useEffect(() => {
    const notes = getNotes();
    setNotes(notes);
  }, []);

  const handleCreateClick = () => {
    navigate("/write");
  };
  const handleNoteClick = (id: string | undefined) => {
    navigate(`/write/${id}`);
  };
  return (
    <div className={styles.noteContainer}>
      <Dropdown />
      <ul className={styles.ul}>
        {notes.map((note) => {
          return (
            <li key={note.id} onClick={() => handleNoteClick(note.id)}>
              <Note
                title={note.title}
                content={note.content}
                id={""}
                createdTime={note.createdTime}
                updateTime={note.updateTime}
              />
            </li>
          );
        })}
      </ul>
      <footer className={styles.footer}>
        <Button
          text="Create Note"
          onClick={handleCreateClick}
          backgroundColor="#4870d4"
        />
      </footer>
    </div>
  );
};

export default Main;
