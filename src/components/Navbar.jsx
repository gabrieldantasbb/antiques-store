import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className={`flex justify-between py-6`}>
      <div className="flex py-4">
        <h3 className="font-poppins text-[24px] font-bold">Siboria</h3>
        <h3 className="font-poppins text-[24px] font-bold text-orange">.</h3>
      </div>
      <ul className="flex py-4 hidden sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a
              href=""
              className={`font-poppins text-[14px] ${
                index === 0 ? "font-medium" : "font-regular"
              }`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <button className="hidden sm:flex font-poppins text-[14px] font-medium text-white bg-orange rounded-[10px] p-4">
          Our Collections
        </button>
      </div>

      <div className="flex sm:hidden justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-orange absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium 
                ${ index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                ${ active === nav.title ? "text-white" : "text-dimWhite"}`}
                onClick={() => (setActive(nav.title), setToggle(!toggle))}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
