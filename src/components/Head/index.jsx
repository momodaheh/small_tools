import React from 'react'
import styles from "./index.module.scss";
import logo from "../../../src/assets/img/logo.jpg"

export default function Head() {
  return (
      <div className={styles.bian}>
        <div>
          <img src={logo} className={styles.logo}></img>
        </div>
      </div>
  )
}
