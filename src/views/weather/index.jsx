import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { get_Data, get_now_Data } from "../../service/weather";
import { Empty, Select, message } from "antd";
import loci from "../../assets/img/1.png";
import ti from "../../assets/img/2.png";

export default function Weather() {
  const [city, setCity] = useState("杭州");
  const [data, setData] = useState([]);
  const [nowdata, setNowdata] = useState();
  useEffect(() => {
    get_Data(city).then((ret) => {
      if (ret != null && ret.status === 200) {
        setData(ret.data.results[0].daily);
        console.log(ret.data.results[0].daily);
      } else {
        message.error("获取数据失败");
      }
    });
    get_now_Data(city).then((ret) => {
      if (ret != null && ret.status === 200) {
        setNowdata(ret.data.results[0]);
        console.log(ret.data.results[0]);
      } else {
        message.error("获取实时数据失败");
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
  const handleChange = (value) => {
    setCity(value);
  };

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
      <div className={styles.middle}>
        {nowdata ? (
          <div className={styles.today}>
            <div className={styles.today_top}>
              <div>
                <img src={loci} alt="位置" />
                <span>{nowdata.location.name}</span>
              </div>
              <div>
                <img src={ti} alt="时间" />
                <span>{nowdata.last_update.substring(11, 16)}</span>
              </div>
            </div>
            <div className={styles.today_center}>
              <div className={styles.wen}>{nowdata.now.temperature}</div>

              <div className={styles.danwei}>℃</div>
            </div>
            <div className={styles.today_bottom}>
              <img
                src={`/weathers/${nowdata.now.code}@1x.png`}
                alt={nowdata.now.code}
              />
              <span>{nowdata.now.text}</span>
            </div>
          </div>
        ) : (
          <div className={styles.today}>
            <Empty description="暂无今日数据，请刷新" />
          </div>
        )}
        <div className={styles.list_box}>
          {data ? (
            data.map((item, index) => 
              <WeatherItem item={item} key={index} type={index}/>
            )
          ) : (
            <div>
              <Empty description="暂无后三日数据，请刷新" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const WeatherItem = (props) => {
  const { item  ,type} = props;
  return (
    <div className={styles.item}>
      {type === 0 &&
        <span>今天</span>
      }
      {type === 1 &&
        <span>明天</span>
      }
      {type === 2 &&
        <span>后天</span>
      }
      <span>{item.date.substring(5, 10)}</span>
      <img src={`/weathers/${item.code_day}@2x.png`} alt={item.code_day} />
      <img src={`/weathers/${item.code_night}@2x.png`} alt={item.code_night} />
      <span>
        {item.high}℃/{item.low}℃
      </span>
      {item.code_day === item.code_night ? (
        <span>{item.text_day}</span>
      ) : (
        <span>
          {item.text_day}转{item.text_night}
        </span>
      )}
      <span>{item.wind_direction}</span>
    </div>
  );
};
