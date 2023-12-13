import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="px-3 hidden lg:block">
        <div className="flex items-center justify-between border-b py-3 gap-5">
          <p className="text-gray-500">Subscribe</p>
          <h1 className="text-gray-900 text-3xl font-serif font-bold">Large</h1>
          <div className="text-gray-500 flex items-center gap-3">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              height={30}
              width={30}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill=" rgb(107 114 128)"
                d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
              ></path>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </svg>
            <a href="" className="border px-2 py-1 rounded-md border-gray-500">
              Sign Up
            </a>
          </div>
        </div>
        <ul className="text-gray-500 flex justify-between py-2 font-normal">
          <li>World</li>
          <li>U.S.</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Culture</li>
          <li>Business</li>
          <li>Politics</li>
          <li>Opinion</li>
          <li>Science</li>
          <li>Health</li>
          <li>Style</li>
          <li>Travel</li>
        </ul>
      </nav>
      <nav className="block lg:hidden px-3">
        {" "}
        <div className="flex items-center justify-between border-b py-3 gap-5">
          <h1 className="text-gray-900 text-3xl font-serif font-bold">Large</h1>
          <div className="text-gray-500 flex items-center gap-3">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              height={30}
              width={30}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill=" rgb(107 114 128)"
                d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
              ></path>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </svg>
            <a href="" className="border px-2 py-1 rounded-md border-gray-500">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
