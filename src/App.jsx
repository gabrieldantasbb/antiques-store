import React from "react";
import {
  Navbar,
  Catalog,
  Category,
  Feedback,
  Footer,
  Hero,
  Newsletter,
} from "./components";
import { stats } from "./constants";
import styles from "./style";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Hero />
    <Catalog />
    <Category />
    <Feedback />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
