import React from 'react'
import styles from "./index.module.scss";
import Head from '../../components/Head'
import logo from "../../../src/assets/img/logo.jpg"

const menuitems = [
  {
    name: "buff低价提醒",
    value: 1,
  },
  {
    name: "自动生成图标",
    value: 2,
  },
  {
    name: "以撒的结合重生图层攻略",
    value: 3,
  },
];
export default function page() {
  // return (
  //   <div>
  //     <Head />
  //   </div>
  // )
  return (
    <div className={styles.all}>
      <div className={styles.bian}>
        <div>
          <img src={logo} className={styles.logo}></img>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.menu}>
          {menuitems.map((item, index) => {
            return (
              <div className={styles.menuitem} key={index}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={styles.content}></div>
      </div>

      <div className={styles.bian}></div>
    </div>
  );
}
