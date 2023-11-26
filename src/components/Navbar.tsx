import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export let links = [
  { name: "HOME", link: "/" },
  { name: "Expertise", link: "/" },
  { name: "Projects", link: "/" },
  { name: "Blogs", link: "/" },
];

const Navbar = () => {
  let [open, openState] = useState(false);
  return (
    <>
      <>
        <div className=" w-full bg-blue-500 ">
          <div className=" md:flex md:items-center justify-between  bg-blue-700 py-4 md:px-10 px-7 ">
            <div className="  bg-blue-700 font-bold text-2xl cursor-pointer flex text-center font-[Popins] text-green-100">
              Sadhana Yadav
            </div>
            <div
              className="  text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
              onClick={() => openState(!open)}
            >
              {open ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
            <ul
              className={`  bg-blue-700 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 opacity-100" : "top-[-490px]"
              } md:opacity-100 opacity-0`}
            >
              {links.map((link) => (
                <li key={link.name} className=" md:ml-8 text-xl md:my-0 my-7">
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
      </>
    </>
  );
};

export default Navbar;
