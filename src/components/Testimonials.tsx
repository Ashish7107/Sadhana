import React from "react";

interface Props {
  image: string;
  description: string;
  name: string;
  designation: string;
}
const Testimonials = ({ image, description, name, designation }: Props) => {
  return (
    <div className=" relative px-2 mx-4  rounded-3xl   py-2 shadow-lg  hover:shadow-blue-700 hover:shadow-lg w-fit">
      <a
        href="https://www.linkedin.com/in/sadhana-yadav-37a95a110/details/recommendations/?detailScreenTabIndex=0"
        target="blank"
      >
        <img
          src={image}
          alt=""
          className=" absolute rounded-full border-8 border-white bg-white lg:h-36 lg:w-36 sm: h-20 sm: w-20 justify-center lg:mx-28 sm: mx-20  "
        />
        <div className=" flex flex-col   rounded-lg bg-slate-200 hover:bg-slate-400 lg:border-t-[90px]  sm: border-t-[50px]   border-white   lg:h-[450px]   sm: h-[520px] pb-7  ">
          <p className="mt-20  text-xs  px-2  text-center font-sans  text-gray-700">
            <span className="text-orange-700 text-3xl p-0 m-0 ">&#8220;</span>

            {description}
            <span className="text-orange-700 text-3xl sm:text-xl  py-0">
              &#8221;
            </span>
          </p>

          <p className="absolute bottom-5 text-sm lg:text-lg  text-orange-700  text-center ">
            <b>{name}</b>
            <br />
            <span className="text-black text-xs px-2 text-center items-center">
              {" "}
              <b>{designation}</b>
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Testimonials;
