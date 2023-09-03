import React from "react";
import styles from './Weather.module.css'

const SunComponent = () => {
  return (
    <div
      className={`${styles.hot} ${styles.container} w-20 h-20 md:w-40 md:h-40 right-5`}
    >
      <span className={`${styles.sun} w-10 h-10 md:w-24 md:h-24`}></span>
      <span className={styles.sunx}></span>
    </div>
  );
};

export default SunComponent;
