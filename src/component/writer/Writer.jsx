import React, { useState } from "react";
import "./Writer.scss";
import Home from "../Home";
import NewsForm from "../news form/NewsForm";

const Writer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const handleAddNewsClick = () => {
    setIsFormOpen(true);
  };

  const addNews = (newsData) => {
    setNewsList((prevNewsList) => [...prevNewsList, newsData]);
  };

  const handleCloseForm = () => {
    console.log("click");
    setIsFormOpen(false);
  };

  console.log(isFormOpen, "open form writer");

  return (
    <>
      <button onClick={handleAddNewsClick}>Add a News</button>
      {isFormOpen ? (
        <NewsForm onClose={handleCloseForm} onAddNews={addNews} />
      ) : (
        ""
      )}
      <Home newsList={newsList} />
    </>
  );
};

export default Writer;
