import React from "react";
import { links } from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmingPool, faTimes } from "@fortawesome/free-solid-svg-icons";
import ItemsContainer from "./footercomponents/ItemsContainer";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-black p-5 text-white flex flex-row">
        <div className=" md:justify-between md:items-center sm:px-12 px-4 py-7 basis-2/4">
          <h1 className="lg:text-2xl text-1xl md:mb-0 mb-6 lg:leading-tight font-semibold md:w-2/5 ">
            <span className="text-teal-500">Sadhana Yadav</span>An engineer ,a
            ResearchAnalyst
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            numquam ex quia. At beatae reprehenderit, sed cupiditate officia
            blanditiis perspiciatis natus quam unde quibusdam numquam, qui,
          </p> */}
        </div>
        <div className="flex flex-col basis-2/4">
          <div className="flex flex-row text-2xl text-blue-800">
            <div className="md:px-10 px-5">
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="md:px-10 px-5">
              <a href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="md:px-10 px-5">
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className=" ">
            <ul className=" flex flex-row text-xs  px-1 md:py-2 text-green-700">
              {links.map((link) => (
                <li
                  key={link.name}
                  className=" md:ml-8 text-l md:my-4 my-2 px-1 "
                >
                  <a
                    href={link.link}
                    className="hover:text-green-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
