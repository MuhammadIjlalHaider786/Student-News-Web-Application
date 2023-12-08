// NewsForm.js
import React, { useState } from "react";
import "./NewsForm.scss";

const NewsForm = ({ onAddNews, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newsData = {
      title,
      content,
      img: "https://example.com/default-image.jpg",
    };
    onAddNews(newsData);
    onClose();
  };
  return (
    <div className="news-form-overlay">
      <div className="news-form-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
