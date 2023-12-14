import React from "react";

const BlogDesc = () => {
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
      <div className="flex py-6 flex-wrap justify-center mx-1 items-center gap-10">
        <article className="grid md:grid-cols-3 rounded gap-5 border border-gray-500 max-w-[507px] place-items-center">
          <div className="col-span-2 px-4 space-y-3 py-4">
            <span className="text-blue-600 font-bold">World</span>
            <p className="text-3xl font-serif font-bold">Featured post</p>
            <span className="text-gray-500">Nov 12</span>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="text-blue-600 font-medium">Continue reading</p>
          </div>
          <div className="bg-[#494d50] hidden md:block  md:w-[155px] h-[250px] text-white">
            <div className="flex justify-center items-center w-full h-full">
              <p className="">Thumbnail</p>
            </div>
          </div>
        </article>
        <article className="grid md:grid-cols-3 rounded gap-5 border border-gray-500 max-w-[507px] place-items-center">
          <div className="col-span-2 px-4 space-y-3 py-4">
            <span className="text-green-600 font-bold">Design</span>
            <p className="text-3xl font-serif font-bold">Featured post</p>
            <span className="text-gray-500">Nov 11</span>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="text-blue-600 font-medium">Continue reading</p>
          </div>
          <div className="bg-[#494d50] hidden md:block  md:w-[155px] h-[250px] text-white">
            <div className="flex justify-center items-center w-full h-full">
              <p className="">Thumbnail</p>
            </div>
          </div>
        </article>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mx-1 py-6 items-start">
        <section>ffdffdfdf</section>
        {/* aside section */}
        <aside className="w-1/3 lg:block hidden">
          <div className="bg-gray-100 mb-5 rounded p-4">
            <h1 className="font-serif font-bold text-xl italic">About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              saepe eligendi incidunt recusandae voluptates dolorem fuga culpa
              non odit, voluptatum, ipsam facilis.
            </p>
          </div>
          <div className="py-5 space-y-2">
            <h2 className="font-serif font-bold text-xl italic">Archives</h2>
            <ul className="list-none text-blue-500 font-medium">
              <li>March 2014</li>
              <li>February 2014</li>
              <li>January 2014</li>
              <li>December 2013</li>
              <li>November 2013</li>
              <li>October 2013</li>
              <li>September 2013</li>
              <li>August 2013</li>
              <li>July 2013</li>
              <li>June 2013</li>
              <li>May 2013</li>
              <li>April 2013</li>
            </ul>
          </div>
          <div className="py-5 space-y-2">
            <h2 className="font-serif font-bold text-xl italic">Elsewhere</h2>
            <ul className="list-none text-blue-500 font-medium">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogDesc;
