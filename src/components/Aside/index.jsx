import React from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();
  const go = (value) => {
    navigate(value)
  }
  return (
    <div>
      <div className={styles.menu}>
        {menuitems.map((item, index) => {
          return (
            <div className={styles.menuitem} key={index}>
              <span onClick={() => go(item.value)}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const menuitems = [
  {
    name: "buff低价提醒",
    value: "/home/page",
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
