import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { get_Data } from "../../service/weather";
import { Select, message } from "antd";

export default function Weather() {
  const [city, setCity] = useState("杭州");
  const [data, setData] = useState([]);
  useEffect(() => {
    get_Data(city).then((ret) => {
      if (ret != null) {
        setData(ret.data.results[0].daily);
        console.log(ret.data.results[0].daily);
      } else {
        message.error("获取数据失败");
      }
    });
  }, [city]);

  const Citys = [
    {
      label: "杭州",
      value: "hangzhou",
    },
    {
      label: "上海",
      value: "shanghai",
    },
    {
      label: "北京",
      value: "北京",
    },
  ];

  const handleChange = (value) =>{
    setCity(value); 
  }

  return (
    <div>
      <div className={styles.top_select} id="top">
        <span>天气预报</span>
        <Select
          defaultValue="hangzhou"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={Citys}
        />
      </div>
    </div>
  );
}
