import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("blogTitle", title);
    localStorage.setItem("blogContent", content);
    localStorage.setItem("blogAuthor", author);
    window.location.href = "/blog"; // Redirect to PostPage
  };
  return (
    <div className="py-10 px-4 space-y-5">
      <form
        onSubmit={handleSubmit}
        className="px-6 py-10 space-y-3 border-2 bg-gray-50 border-gray-500 rounded-xl max-w-3xl mx-auto"
      >
        <h1 className="font-bold font-serif text-3xl text-center">
          Submit Your Blog Post!
        </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="input-label">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter Your Blog Title"
            className="input-title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="input-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Enter the Author Name"
            className="input-title"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="input-label">
            Blog Content
          </label>
          <textarea
            id="content"
            value={content}
            rows={10}
            required
            placeholder="Enter Blog Content"
            className="px-6 border-2 border-gray-500 rounded-lg focus:resize-y py-3"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-900 font-semibold text-white px-6 py-2 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
