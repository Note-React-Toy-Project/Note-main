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
    console.log(sort);
    if (sort == 1) {
      notes.sort(function (a: NoteType, b: NoteType) {
        console.log("생성순");

        if (a.createdTime && b.createdTime) {
          console.log("a::", new Date(a.createdTime).valueOf());
          console.log("b::", new Date(b.createdTime).valueOf());
          console.log(
            "reu::",
            new Date(b.createdTime).valueOf() -
              new Date(a.createdTime).valueOf()
          );
          return (
            new Date(b.createdTime).valueOf() -
            new Date(a.createdTime).valueOf()
          );
        } else {
          return -1;
        }
      });
    }
    if (sort == 2) {
      notes.sort(function (a: NoteType, b: NoteType) {
        console.log("수정순");
        if (a.updateTime && b.updateTime) {
          return (
            new Date(b.updateTime).valueOf() - new Date(a.updateTime).valueOf()
          );
        } else {
          return -1;
        }
      });
    }
  }, [sort, notes]);

  useEffect(() => {
    const notes = getNotes();
    setNotes(notes);
  }, []);
  const handleCreateClick = () => {
    navigate("/create");
  };
  const handleNoteClick = (id: string) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className={styles.noteContainer}>
      <Dropdown />
      <ul className={styles.ul}>
        {notes.map((note) => {
          return (
            <li key={note.id} onClick={() => handleNoteClick(note.id!)}>
              <Note title={note.title} content={note.content} />
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
