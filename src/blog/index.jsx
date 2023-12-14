import React from "react";
import NewFeature from "../components/NewFeature";
import AsideSection from "../components/Aside";
import AnotherBlog from "../components/AnotherBlog";
import DefaultArticles from "./../components/Articles";

const Blog = () => {
  return (
    <main className="px-1 space-y-2 py-6">
      {/* title */}
      <div className="bg-[#343A40] rounded text-white grid lg:grid-cols-2 mx-1 place-items-center py-14 px-10">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-5xl font-serif italic font-bold">
            Title of a longer featured blog post
          </h1>
          <p className="text-lg text-gray-400">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className="font-bold text-lg">Continue reading...</p>
        </div>
        <div></div>
      </div>
      {/* article */}
      <DefaultArticles />
      <div className="flex flex-col lg:flex-row justify-between gap-5 mx-1 py-6 items-start">
        <section className="flex-1 px-3">
          <AnotherBlog />
          <NewFeature />
        </section>
        {/* aside section */}
        <AsideSection />
      </div>
    </main>
  );
};

export default Blog;
