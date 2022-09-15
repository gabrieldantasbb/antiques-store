import React from "react";
import styles from "../style";
import { navLinks, resources, seboria, company } from "../constants";

const Footer = () => (
  <section className={`${styles.paddingX} ${styles.paddingY}`}>
    <div className="flex justify-between gap-4 mb-20">
      <div>
        <h1 className="font-poppins font-semibold text-base mb-5">Resources</h1>
        <ul>
          {resources.map((resource, index) => (
          <li key={resource.id} className={` ${index === resources.length - 1 ? "pb-0" : "pb-2 md:pb-4"} `}>
              <a href="" className="font-poppins text-xs font-medium text-gray">{resource.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
      <h1 className="font-poppins font-semibold text-base mb-5">Seboria</h1>
      <ul>
        { seboria.map((seboria, index) =>(
          <li key={seboria.id} className={` ${index === resources.length - 1 ? "pb-0" : "pb-2 md:pb-4"} `}>
          <a href="" className="font-poppins text-xs font-medium text-gray">{seboria.title}</a>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h1 className="font-poppins font-semibold text-base mb-5">Company</h1>
      <ul>
        { company.map((company, index) =>(
          <li key={company.id} className={` ${index === resources.length - 1 ? "pb-0" : "pb-2 md:pb-4"} `}>
          <a href="" className="font-poppins text-xs font-medium text-gray">{company.title}</a>
          </li>
        ))}
      </ul>
      </div>
      <div className="hidden md:flex md:flex-col">
        <div><h3 className="font-poppins font-semibold text-base mb-5">Get in Touch</h3></div>
        <div><p className="font-poppins text-xs font-medium text-gray mb-9">Feel free to get it touch with us via e-mail</p></div>
        <div><a className="font-poppins font-bold text-base text-lightblue ">shakir260@gmail.com</a></div>
      </div>
    </div>
    <div className="flex justify-between py-6">
      <div className="flex py-4">
        <h3 className="font-poppins text-[24px] font-bold">Siboria</h3>
        <h3 className="font-poppins text-[24px] font-bold text-orange">.</h3>
      </div>
      <ul className="py-4 hidden md:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            {" "}
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
    </div>
  </section>
);

export default Footer;
