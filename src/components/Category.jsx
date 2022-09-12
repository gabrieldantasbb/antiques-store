import React from "react";
import styles, { layout } from "../style";
import {
  weapons,
  skulls,
  statues,
  keep,
  watches,
  furniture,
  left,
  right,
} from "../assets";

const Category = () => (
  <section
    className={`flex md:flex-col justify-center w-full ${layout.section} ${styles.paddingX}`}
  >
    <div className="grid grid-flow-col">
      <div>
        <h2 className={`${styles.heading2}`}>Top Categories</h2>
        <p className={`${styles.paragraph} mt-[24px]`}>
          Party we years to order allow asked of. We so opinion friends me
          message as delight.
        </p>
      </div>
      <div className="hidden md:flex justify-self-end">
        <div>
          <button type="button">
            <img src={left} alt="leftarrow" />
          </button>
        </div>
        <div>
          <button type="button">
            <img src={right} alt="rightarrow" />
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row h-full w-full gap-2 md:gap-6 mt-[50px]">
      <div>
        <div className="grid grid-flow-col gap-2 md:gap-6">
          <div className="relative">
            <img src={weapons} alt="weapons" className="h-[91%] md:h-full md:w-full mr-0" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-4 left-4 shadowbr">122</p>
            <div className="absolute bottom-4 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
          </div>
          <div className="relative ">
            <img src={skulls} alt="skulls" className="h-[91%] md:h-full md:w-full mr-0" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-4 left-4 shadowbr">122</p>
            <div className="absolute bottom-4 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
            
          </div>
          <div className="row-span-2 relative">
            <img src={statues} alt="statues" className="min-full w-full" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-4 left-4 shadowbr">122</p>
            <div className="absolute bottom-8 md:bottom-14 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6">
          <div className="col-span-2 relative">
            <img src={keep} alt="keep" className="h-full w-full" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-5 left-4 shadowbr">122</p>
            <div className="absolute bottom-8 md:bottom-8 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
          </div>
          <div className="relative">
            <img src={watches} alt="watch" className="h-[89%] md:h-[93%] w-full" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-5 left-4 shadowbr">122</p>
            <div className="absolute bottom-8 md:bottom-8 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
          </div>
          <div className="relative">
            <img src={furniture} alt="funiture" className="" />
            <p className="rounded-xl bg-white font-poppins font-semibold text-orange text-[11px] md:text-xs py-1 px-2 absolute top-5 left-4 shadowbr">122</p>
            <div className="absolute bottom-8 md:bottom-8 left-4">
            <h3 className="font-poppins font-bold text-white md:text-2xl shadowtxt">Weapons</h3>
            <p className="font-medium font-white text-white text-sm md:text-base shadowtxt">Worefall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Category;
