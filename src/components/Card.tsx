import React from "react";
import a from "../assets/a.jpeg";

interface Props {
  heading: string;
  image: string;
  text: string;
}

const Card = ({ heading, image, text }: Props) => {
  return (
    <div className="  grid grid-cols-1    max-w-xs ">
      <h1 className="text-blue-900 justify-center flex text-2xl ">{heading}</h1>
      <img
        src={image}
        alt=""
        className=" flex  justify-center  px-32 h-[80px] "
        style={{ height: "" }}
      />

      <p className="text-sm  pt-16">{text}</p>
    </div>
  );
};

export default Card;
