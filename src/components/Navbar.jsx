import React from "react";
import { navLinks } from "../constants";
import styles from "../style"

const Navbar = () => (
  <nav className={`flex justify-between py-6`}>
    <div className="flex py-4">
      <h3 className="font-poppins text-[24px] font-bold">
        Siboria
      </h3>
      <h3 className="font-poppins text-[24px] font-bold text-orange">.</h3>
    </div>
    <ul className="flex py-4">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
          <a href="" className={`font-poppins text-[14px] ${ index === 0 ? "font-medium" : "font-regular"}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
    <div>
      <button className="font-poppins text-[14px] font-medium text-white bg-orange rounded-[10px] p-4">Our Collections</button>
    </div>
  </nav>
);

export default Navbar;
