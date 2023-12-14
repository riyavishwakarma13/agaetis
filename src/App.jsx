import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update UI with submitted content
    setBlogData({ title, content });
    // Clear form fields
    setTitle("");
    setContent("");
  };

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  // Stores submitted data for display
  const [blogData, setBlogData] = useState({});

  return (
    <div>
      <h1>Submit your blog post!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>

        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {blogData.title && (
        <div className="submitted-post">
          <h3>{blogData.title}</h3>
          <p>{blogData.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;
