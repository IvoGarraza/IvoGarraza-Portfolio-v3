import React from 'react'
import styles from './Weather.module.css'

const NightComponent = () => {
  return (
    <div
    className={`${styles.night} ${styles.container} w-20 h-20 lg:w-40 lg:h-40 right-5`}
  >
    <span className={`${styles.moon} w-10 h-10 lg:w-24 lg:h-24`}></span>
    <span className={styles.spot1}></span>
    <span className={styles.spot2}></span>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  )
}

export default NightComponent