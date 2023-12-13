import React from "react";

const BlogDesc = () => {
  return (
    <main>
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
      <div></div>
    </main>
  );
};

export default BlogDesc;
