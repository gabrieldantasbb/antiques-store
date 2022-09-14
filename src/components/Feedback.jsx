import React from "react";
import styles, { layout } from "../style";
import { angel, arshid, stars } from "../assets";

const Feedback = () => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX}`}
  >
    <div className="flex flex-col md:flex-row">
      <div className="w-full h-full">
        <img src={angel} alt="angel" className=""/>
      </div>
      <div className="grid content-center">
        <h1 className="font-poppins font-semibold text-4xl pb-4">
          Buyer’s Feedback
        </h1>
        <p className={`${styles.paragraph} medium italic pb-8 md:pb-11`}>
          Whole front do of plate heard oh ought. His defective nor convinced
          residence own. Connection has put impossible own apartments
          boisterous.
        </p>
        <div className="flex space-x-4">
          <div>
            <img src={arshid} alt="man" />
          </div>
          <div>
            <h3 className="font-poppins text-sm font-semibold">AR Shakir</h3>
            <p className="font-poppins font-regular text-xs text-gray">UI Designer</p>
            <div>
              <img src={stars} alt="stars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feedback;
