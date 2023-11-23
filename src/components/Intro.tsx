import React from "react";
import Button from "./Button";
import image from "../assets/sadhana.png";

const Intro = () => {
  return (
    <div className="  flex   font-sans    pt-5">
      <img src={image} alt="" className=" flex px-64   sm:h-[300px] " />
      {/* <div className="absolute  pt-40 pl-80">
        <h1 className=" text-blue-500 text-4xl">
          <b>Hello!</b> <br></br>
          <span className="text-blue-800 text-xl">I am &nbsp;</span>
          <span className="text-blue-800">
            {" "}
            <b>Sadhana Yadav</b>{" "}
          </span>
        </h1>
        <p className=" text-gray-500 pt-16">
          I have a knack for following market trend, analyzing them, and making{" "}
          interactive <br />
          visualizations to better understand the dynamic and make informed
          business decisions.
        </p>
        <div className=" pt-32 pl-72">
          <button
            className="  px-5 py-4 rounded text-white"
            style={{ backgroundColor: "#879ae0" }}
          >
            {" "}
            <a href="https://www.linkedin.com/in/ashish--kumar--yadav/">
              Let's Connect
            </a>{" "}
          </button>
        </div>
      </div> */}

      {/* <p className="absolute ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        dolore ullam expedita laborum debitis minus temporibus neque animi,
        maxime quia ducimus commodi doloribus impedit dolorem rerum hic dolor
        officia minima ipsum possimus quas provident a? Consectetur, ex
        exercitationem saepe at doloribus excepturi enim atque animi, porro
        pariatur possimus labore tempora!
      </p> */}
    </div>
  );
};

export default Intro;
