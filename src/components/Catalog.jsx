import React from "react";
import styles, { layout } from "../style";
import { product } from "../constants";

const Catalog = () => (
  <section
    className={`flex md:flex-col justify-center ${layout.section} ${styles.paddingX}`}
  >
    <div>
      <h2 className={`${styles.heading2}`}>Recently Added</h2>
      <p className={`${styles.paragraph} mt-[20px]`}>
        Not thoughts all exercise blessing. Indulgence way everything joy
        alteration boisterous the attachment.
      </p>
    </div>
    <div></div>

    <div className="flex index-1 mt-[40px] w-[100%]">
      {product.map((prod, index) => (
        <div key={prod.id} className={`flex flex-col ${index  === product.length - 1 ? "mr-0" : "mr-5" } p-4 rounded-[8px]`}>
          <div className="w-[100%] h-[100%]">
            <img src={prod.img} />
          </div>
          <div>
            <div className="flex pt-5">
              <h1 className="font-poppins font-medium md:text-xl ">
                {prod.title}
              </h1>
            </div>
            <div className="font-poppins font-medium text-[12px] leading-5 font-gray ">
              {prod.year} | {prod.category}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between pt-[20px]">
            <div className="font-poppins font-bold text-[18px] leading-10 mr-4 w-1/2 whitespace-nowrap">
              R$ {prod.value}
            </div>
            <div className="w-1/2">
              <button
                type="button"
                className={`py-1 px-6 font-poppins font-medium text-[11px] md:text-[12px] text-lightblue outline rounded-[8px]`}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="pt-[42px]">
            <div className="font-poppins regular text-[12px]">{prod.bids} bids so far.</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Catalog;
