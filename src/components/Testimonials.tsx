import React from "react";

interface Props {
  image: string;
  description: string;
  name: string;
  designation: string;
}
const Testimonials = ({ image, description, name, designation }: Props) => {
  return (
    <div className="  px-2 ">
      <>
        <img
          src={image}
          alt=""
          className=" absolute rounded-full border-8 border-white bg-white lg:h-36 lg:w-36 sm: h-20 sm: w-20 justify-center  lg:mx-32 sm: mx-24"
        />
        <div className=" flex flex-col    bg-slate-200  lg:border-t-[90px]  sm: border-t-[50px]   border-white    pb-7 lg:h-[420px] sm: h-[500px] ">
          <p className="mt-20  text-xs  px-2  ">
            <span className="text-orange-700 text-3xl ">&#8220;</span>

            {description}
            <span className="text-orange-700 text-3xl py-0">&#8221;</span>
          </p>

          <p className="    text-orange-700  text-center ">
            {" "}
            <b>{name}</b>
            <br />
            <span className="text-black text-xs px-2">
              {" "}
              <b>{designation}</b>
            </span>
          </p>
        </div>
      </>
    </div>
  );
};

export default Testimonials;
