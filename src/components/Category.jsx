import React from 'react'
import styles, { layout } from "../style";
import { weapons, skulls, statues, keep, watches, furniture } from '../assets';

const Category = () => (
    <section
    className={`flex md:flex-col justify-center ${layout.section} ${styles.paddingX}`}
  >
    <div>
      <h2 className={`${styles.heading2}`}>Top Categories</h2>
      <p className={`${styles.paragraph} mt-[20px]`}>
      Party we years to order allow asked of. We so opinion friends me message as delight.
      </p>
    </div>
    <div></div>
    <div className='flex flex-col md:flex-row w-full gap-4'>
      <div>
        <div className='grid grid-rows-2 grid-flow-col gap-4'>
          <div className="bg-blue h-15 w-17"><img src={weapons} alt="" /></div>
          <div className="bg-blue h-15 w-17"><img src={skulls} alt="" /></div>
          <div className="row-span-2 bg-blue h-32 w-22"><img src={statues} alt="" /></div>
        </div>
        <div></div>
      </div>
      <div>
      <div className='grid grid-rows-2 grid-flow-col gap-4'>
          <div className="col-span-2 bg-blue h-15 w-29"><img src={keep} alt="" /></div>
          <div className="bg-blue h-15 w-9"><img src={watches} alt="" /></div>
          <div className="bg-blue h-15 w-15"><img src={furniture} alt="" /></div>
        </div>
      </div>
    </div>

  </section>
  )

export default Category