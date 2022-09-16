import React from "react";
import { radio, send } from "../assets";
import styles from "../style";

const Newsletter = () => (
  <section className={`${styles.paddingX} md:relative mt-10 md:ml-[10%] md:mr-[10%]`}>
  <div className="bg-blue rounded-3xl justify-center">
    <div className="flex flex-col-reverse md:flex-row md:w-full md:justify-between">
      <div className="self-center p-5 md:pl-20 py-[70px]">
        <h1 className="font-poppins font-bold text-4xl text-white">Subscribe our newsletter</h1>
        <p className="text-base font-medium max-w-[401px] pt-4 text-white">Reciev latest news, update, and many other things every week. </p>
        <div>
        <form className="bg-white max-w-[450px] h-[50px] rounded-[12px] flex pl-4 justify-between mt-10">
          <input type="text" placeholder="Enter Your email adress" className="outline-none max-w-[450px]" />
          <button type="submit" className="hidden md:flex"><img src={send} alt="send" className=""/></button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex"><img src={radio} alt="radio" className="md:absolute md:right-[300px] md:bottom-2"/></div>
    </div>
    </div>
  </section>
);

export default Newsletter;
