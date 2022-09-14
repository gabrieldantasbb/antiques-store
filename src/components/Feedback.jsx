import React from 'react';
import styles, {layout} from '../style';
import { angel } from '../assets';



const Feedback = () => (
    <section className={`${styles.boxWidth} ${layout.section} ${styles.paddingX}`}>
      <div className='flex-col md:flex-row'>
        <div><img src={angel} alt="angel" /></div>
        <div><h1>Buyer’s Feedback</h1>
        <p>Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>
        <div></div></div>
      </div>
    </section>
  )

export default Feedback