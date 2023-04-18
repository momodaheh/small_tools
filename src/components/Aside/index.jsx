import React from "react";
import styles from "./index.module.scss";

export default function Aside() {
  return (
    <div>
      <div className={styles.menu}>
        {menuitems.map((item, index) => {
          return (
            <div className={styles.menuitem} key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className={styles.bian}>

      </div>
    </div>
  );
}

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
