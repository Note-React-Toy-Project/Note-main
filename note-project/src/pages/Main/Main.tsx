import Note from "../../components/Note/Note";
import { NoteType } from "../../interface/NoteType";
import styles from "./Main.module.css";

const Main = () => {
  const notes: NoteType[] = [
    {
      title: "title11",
      content: "content111",
    },
    {
      title: "title2",
      content: "content222",
    },
    {
      title: "title3",
      content: "content333",
    },
    {
      title: "title4",
      content: "content444",
    },
  ];

  return (
    <>
      main page 여기다가 노트 뿌릴거임
      <div className={styles.noteContainer}>
        {notes.map((eachNote) => {
        return <Note title={eachNote.title} content={eachNote.content} />;
      })}
      </div>
      
    </>
  );
};

export default Main;
