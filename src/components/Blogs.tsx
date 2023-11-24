import React from "react";
interface Props {
  heading: string;
  image: string;
  text: string;
  link: string;
}
const Blogs = ({ heading, image, text, link }: Props) => {
  return (
    <div className="      max-w-xs border-2 border-gray-600  ">
      <img
        src={image}
        alt=""
        className=" flex  justify-center px-10 pb-10  pt-6 w-fit"
      />

      <h1 className="text-blue-900 justify-center flex text-lg px-2">
        {heading}
      </h1>
      <hr />
      <p className="text-sm px-2 pt-4 pb-4">{text}</p>
      <button className="flex justify-center bg-blue-600 mx-24 w-24 mb-4 rounded-2xl ">
        <a href={link} target="blank">
          <p className="flex justify-center text-white">Read Full Article</p>
        </a>
      </button>
    </div>
  );
};

export default Blogs;
