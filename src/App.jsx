import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("blogTitle", title);
    localStorage.setItem("blogContent", content);
    window.location.href = "/blog"; // Redirect to PostPage
  };
  return (
    <div>
      <h1>Submit your blog post!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Submit Your Blog Post</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
