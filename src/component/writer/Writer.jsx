import React, { useState } from "react";
import "./Writer.scss";
import Home from "../Home";
import NewsForm from "../news form/NewsForm";

const Writer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddNewsClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <button onClick={handleAddNewsClick}>Add a News</button>
      {isFormOpen ? <NewsForm onClose={handleCloseForm} /> : <NewsForm /> }
      <Home />
    </>
  );
};

export default Writer;
