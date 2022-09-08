import React from "react";
import styles, { layout } from "../style.js";
import { play, vase } from "../assets";
import { stats } from "../constants/index.js";

const Hero = () => (
  <section
    className={`sm:flex-col flex justify-between ${layout.section} ${styles.paddingX}`}
  >
    <div className={`${layout.sectionInfo}`}>
      <h1 className={`${styles.heading}`}>
        World’s Biggest <br /> Antique Collection
      </h1>
      <p className={`${styles.paragraph} md:py-[40px] py-[20px] max-w-[436px]`}>
        From they fine john he give of rich he. They age and draw mrs like.
        Improving end distrusts may instantly was household applauded incommode.{" "}
      </p>
      <div className="md:flex">
        <div className="py-[25px]">
          <button className="font-poppins text-[18px] font-medium text-white bg-orange rounded-[10px] min-w-[191px] h-[60px]">
            Discover Now
          </button>
        </div>
        <img src={play} alt="play" />
      </div>
    </div>
    <div>
      <img src={vase} />
    </div>
    <div className="flex md:flex-col md:justify-center">
      {stats.map((stats, index) => (
        <div key={index} className={`flex ${ index === stats.length - 1 ? "py-0" : "py-3"}`}>
          <img src={stats.icon} alt={stats.id} className="h-[28px] w-[28px] m-[20px] mr-5" />
          <div>
            <div className="font-poppins font-bold md:text-[30px] text-[24px] leading-7 py-2">{stats.value}</div>
            <div className="font-poppins font-regular md:text-[14px] text-[12px] leading-4 text-gray">{stats.title}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
