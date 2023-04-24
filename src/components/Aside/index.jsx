import React from "react";
import styles from "./index.module.scss";
import {  useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();
  const go = (value) => {
    navigate(value)
  }
  return (
      <div className={styles.menu} id="menu">
        {menuitems.map((item, index) => {
          return (
            <div className={styles.menuitem} key={index}>
              <span onClick={() => go(item.value)}>{item.name}</span>
            </div>
          );
        })}
      </div>

  );
}

const menuitems = [
  {
    name: "buff低价提醒",
    value: "/home/cue",
  },{
    name: "天气预报",
    value: "/home/weather",
  },
  {
    name: "以撒的结合重生图层攻略",
    value: 3,
  },
  {
    name: "自动生成图标",
    value: 4,
  },
  
];
