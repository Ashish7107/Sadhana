import React from "react";

interface Props {
  heading: string;
  image: string;
  text: string;
  link: string;
}

const Blogs = ({ heading, image, text, link }: Props) => {
  return (
    <div className="max-w-xs border-2 border-gray-200 shadow-2xl shadow-slate-200 h-auto flex flex-col items-center">
      <img
        src={image}
        alt=""
        className="flex justify-center px-10 pb-10 pt-6 w-fit"
      />

      <h1 className="text-blue-900 text-lg px-2">{heading}</h1>
      <hr />
      <p className="text-sm px-2 pt-4 pb-4">{text}</p>

      <div className="flex-grow" />

      <button className="bg-blue-600 w-40 mb-4 rounded-3xl py-2 hover:bg-blue-300">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full h-full text-white"
        >
          Read Full Article
        </a>
      </button>
    </div>
  );
};

export default Blogs;
