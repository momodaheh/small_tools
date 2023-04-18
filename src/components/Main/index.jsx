import React from 'react'
import styles from "./index.module.scss";
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (

      <div className={styles.content}>
        <div className={styles.middle}>
          <Outlet />
        </div>
      </div>
  )
}
