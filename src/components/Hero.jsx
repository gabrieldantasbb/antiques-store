import React from "react";
import styles, { layout } from "../style.js";
import { play, vase, search } from "../assets";
import { stats, searches } from "../constants/index.js";

const Hero = () => (
  <section className={`flex md:flex-col ${layout.section} ${styles.paddingX}`}>
    <div className="md:flex pb-5 justify-between">
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading} md:w-[547px]`}>
          World’s Biggest <br /> Antique Collection
        </h1>
        <p
          className={`${styles.paragraph} md:py-[40px] py-[20px] max-w-[436px]`}
        >
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded
          incommode.{" "}
        </p>
        <div className="flex">
          <div className="py-[18px] md:py-[25px]">
            <button className="py-4 px-6 font-poppins text-[12px] font-medium text-white bg-orange rounded-[10px] mr-5 md:text-[18px]">
              Discover Now
            </button>
          </div>
          <img src={play} alt="play" className="w-1/2 h-[100%]" />
        </div>
      </div>
      <div className={`flex ${styles.flexCenter} `}>
        <img src={vase} className="md:pr-[70px]" />
      </div>
      <div className="flex pt-5 md:pt-0 md:flex-col justify-center">
        {stats.map((stats, index) => (
          <div
            key={index}
            className={`flex w-full ${
              index === stats.length - 1 ? "py-0" : "py-3"
            }`}
          >
            <img
              src={stats.icon}
              alt={stats.id}
              className="h-[28px] w-[28px]  m-2 md:m-[20px] mr-3 md:mr-5"
            />
            <div className="w-[100%]">
              <div className="font-poppins font-bold md:text-[30px] text-[18px] leading-7 md:py-2">
                {stats.value}
              </div>
              <div className="font-poppins font-regular md:text-[14px] text-[12px] leading-4 text-gray">
                {stats.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="hidden md:flex md:flex-row flex-col md:py-[25px] justify-center">
      <ul className="flex flex-center w-full">
        {searches.map((srch, index) => (
          <li className="mr-[185px]">
            <div className="font-poppins font-medium md:text-[16px] text-[14px] text-denim">
              {srch.id}
            </div>
            <div className="font-poppins font-regular md:text-[14px] text-[12px] text-gray">
              {srch.title}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className="flex items-center py-4 px-6 font-poppins text-[12px] font-medium text-white bg-blue rounded-[10px] mr-5 md:text-[18px]">
          <img
            src={search}
            alt="search"
            className="h-[14px] w-[14px] md:h-[18px] md:w-[18px] mr-1 white"
          />
          Search
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
