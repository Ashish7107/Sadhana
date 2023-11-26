import React from "react";
import Button from "./Button";
import image from "../assets/Sadhana.png";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row font-sans pt-5 bg-gray-300 pb-4 w-full justify-center rounded-lg md:mx-48">
      <div className="flex flex-row items-center justify-center">
        <img src={image} alt="" className="h-5/6" />
      </div>
      <div className="flex flex-col justify-start ml-4 md:pt-40">
        <h1 className="text-blue-500 text-4xl">
          <b>Hello!</b> <br />
          <span className="text-blue-800 text-xl">I am&nbsp;</span>
          <span className="text-blue-800">
            <b>Sadhana Yadav</b>
          </span>
        </h1>
        <p className="text-gray-500 pt-4">
          I have a knack for following market trends, analyzing them, and making
          interactive <br />
          visualizations to better understand the dynamic and make informed
          business decisions.
        </p>
        <div className="mt-4 flex justify-center items-center">
          <button
            className="px-4 mx-10 py-4 rounded text-white"
            style={{ backgroundColor: "#879ae0" }}
          >
            <a href="https://www.linkedin.com/in/ashish--kumar--yadav/">
              Let's Connect
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
