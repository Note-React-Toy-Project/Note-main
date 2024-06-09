import { useState } from "react";

const useChange = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  return { title, content, handleTitleChange, handleContentChange };
};
export default useChange;
