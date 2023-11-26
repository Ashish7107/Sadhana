import React from "react";
import a from "../assets/a.jpeg";

interface Props {
  heading: string;
  image: string;
  text: string;
}

const Card = ({ heading, image, text }: Props) => {
  return (
    <div className="flex flex-col items-center max-w-xs my-16 md:my-0">
      <h1 className="text-blue-900 text-2xl my-4">{heading}</h1>
      <img src={image} alt="" className="h-1/6  w-2/6 md:w-auto my-4" />
      <p className="text-sm my-4">{text}</p>
    </div>
  );
};

export default Card;
