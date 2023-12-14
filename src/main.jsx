import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./blog/index.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <body className="max-w-6xl mx-auto">
      <Navbar />
      <RouterProvider router={router} />
    </body>
  </React.StrictMode>
);
