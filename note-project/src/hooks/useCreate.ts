import { useState } from "react";
import { saveNote } from "../utils/storageNote";
import { useNavigate } from "react-router-dom";

const useCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleDoneClick = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("빈칸을 정확히 입력해주세요.");
      return;
    }
    if (title && content) {
      const newNote = { title, content };
      saveNote(newNote);
      setTitle("");
      setContent("");
      navigate("/");
    }
  };
  return {
    title,
    content,
    setTitle,
    setContent,
    handleTitleChange,
    handleContentChange,
    handleDoneClick,
  };
};
export default useCreate;
