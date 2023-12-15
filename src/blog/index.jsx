import React from "react";
import NewFeature from "../components/NewFeature";
import AsideSection from "../components/Aside";
import AnotherBlog from "../components/AnotherBlog";
import DefaultArticles from "./../components/Articles";

const Blog = () => {
  const title = localStorage.getItem("blogTitle");
  const content = localStorage.getItem("blogContent");
  const author = localStorage.getItem("blogAuthor");

  if (!title || !content) {
    return <p>No blog post found!</p>;
  }
  return (
    <main className="px-1 space-y-2 py-6">
      {/* title */}
      <div className="bg-[#343A40] rounded text-white grid lg:grid-cols-2 mx-1 place-items-center py-14 px-10">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-5xl font-serif italic font-bold">
            {title}
          </h1>
          <p className="text-lg text-gray-400">{content.slice(0, 200)}...</p>
          <p className="font-bold text-lg">Continue reading...</p>
        </div>
        <div></div>
      </div>
      {/* article */}
      <DefaultArticles />
      <div className="flex flex-col lg:flex-row justify-between gap-5 mx-1 py-6 items-start">
        <section className="flex-1 px-3">
          <div className="border-b py-4 border-gray-300">
            <h2 className="text-2xl font-serif italic font-bold">
              From the Firehose
            </h2>
          </div>
          <div className="py-5">
            <h3 className="text-3xl font-serif font-bold">{title}</h3>
            <p className="text-gray-500 font-medium">
              December 23, 2013 by{" "}
              <span className="text-blue-500 capitalize">{author}</span>
            </p>
          </div>
          <div className="space-y-2">
            <p>{content}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              magni recusandae rem consequatur possimus impedit vero. Nisi esse
              et fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam et voluptatibus inventore illum minima necessitatibus
              rerum sunt ex aut? Temporibus, voluptatibus eligendi. Tenetur
              iste, blanditiis cumque dolore in praesentium adipisci?
            </p>
            <ul className="list-disc pl-8">
              <li>
                Temporibus, voluptatibus eligendi. Tenetur iste, blanditiis
                cumque
              </li>
              <li>
                Aliquam et voluptatibus inventore illum minima necessitatibus
                rerum sunt ex aut?
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              magni recusandae rem consequatur possimus impedit vero. Nisi esse
              et fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam et voluptatibus inventore illum minima necessitatibus
              rerum sunt ex aut? Temporibus, voluptatibus eligendi. Tenetur
              iste, blanditiis cumque dolore in praesentium adipisci?
            </p>
          </div>
          <AnotherBlog />
          <NewFeature />
        </section>
        {/* aside section */}
        <AsideSection />
      </div>
      <div className="flex justify-center">
        <a
          href="/"
          className="bg-gray-900 font-semibold text-white px-4 py-3 rounded-full"
        >
          Go Back Home
        </a>
      </div>
    </main>
  );
};

export default Blog;
