import React from "react";
import styles from "./Weather.module.css";

const CloudComponent = () => {
  return (
    <div className={`${styles.cloudy} ${styles.container} w-20 h-20 lg:w-40 lg:h-40 relative`}>
      <span className={styles.cloud}></span>
      <span class={styles.cloudx}></span>
    </div>
  );
};

export default CloudComponent;
