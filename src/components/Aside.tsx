import React from "react";

const AsideSection = () => {
  return (
    <aside className="w-1/3 lg:block hidden">
      <div className="bg-gray-100 mb-5 rounded p-4">
        <h1 className="font-serif font-bold text-xl italic">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe
          eligendi incidunt recusandae voluptates dolorem fuga culpa non odit,
          voluptatum, ipsam facilis.
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
  );
};

export default AsideSection;
