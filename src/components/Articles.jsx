import React from "react";

const DefaultArticles = () => {
  return (
    <div className="flex py-6 flex-wrap justify-center mx-1 items-center gap-10">
      <article className="grid md:grid-cols-3 rounded gap-5 border border-gray-500 max-w-[507px] place-items-center">
        <div className="col-span-2 px-4 space-y-3 py-4">
          <span className="text-blue-600 font-bold">World</span>
          <p className="text-3xl font-serif font-bold">Featured post</p>
          <span className="text-gray-500">Nov 12</span>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
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
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
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
  );
};

export default DefaultArticles;
