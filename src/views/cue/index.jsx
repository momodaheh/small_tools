import { Button, List, Select } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";

//脚本
//回到顶部
export default function Cue() {
  const goods = [
    {
      name: "M9 刺刀（★） | 传说 (崭新出厂)",
      type: "knife",
      url: "/buff/M9_legend.png",
      goodId: "43106",
    },
    {
      name: "折刀（★） | 渐变大理石 (崭新出厂)",
      type: "knife",
      url: "/buff/Zhe_marble.png",
      goodId: "769525",
    },
    {
      name: "M4A4 | 皇帝 (崭新出厂)",
      type: "rifle",
      url: "/buff/M4_emperor.png",
      goodId: "769584",
    },
    {
      name: "小宝巨龙",
      type: "Printing",
      url: "/buff/dragon_baby.png",
      goodId: "903815",
    },
    {
      name: "短剑（★） | 虎牙 (崭新出厂)",
      type: "knife",
      url: "/buff/duan_tiger.png",
      goodId: "769498",
    },
  ];
  const type=[ {
    value: "all",
    label: "全部",
  },
  {
    value: "knife",
    label: "匕首",
  },
  {
    value: "rifle",
    label: "步枪",
  },
  {
    value: "Printing",
    label: "印花",
  },]

  const [selectValue, setSelectValue] = useState(""); // 定义一个状态变量存储下拉框的选择值
  const [data, setData] = useState(goods); // 将商品信息列表与状态变量 data 绑定

  const handleChange = (value) => {
    setSelectValue(value); // 更新下拉框的选择值
    // 根据选择值筛选出不同类型的商品信息
    setData(
      value === "all" // 如果选择的值为空字符串，则显示所有商品信息
        ? goods
        : goods.filter((item) => item.type === value)
    );
  };

  
  return (
    <div>
      <div className={styles.top_select} id="top">
        <span>csgobuff低价提醒</span>
        <Select
          defaultValue="all"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={type}
        />
      </div>
      {/* <div className={styles.middle}> */}
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.goodId}>
              <Good item={item} />
            </List.Item>
          )}
        />
        <div className={styles.back} >top</div>
      {/* </div> */}
    </div>
  );
}

const Good = (props) => {
  const { item } = props;

  return (
    <div className={styles.itemStyle}>
      <div className={styles.img_box}>
        <img alt={item.name} className={styles.img} src={item.url} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.detail}>
          <div className={styles.low_price}>
            <div>
              <span>当前最低价:</span>
              <label style={{ display: "inline-block", width: "40px" }}></label>
            </div>
            <Button size="small">查找</Button>
          </div>
          <div className={styles.target_price}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>目标价格:</span>
              <input
                type="number"
                style={{ width: "55px", fontSize: "18px" }}
              ></input>
            </div>
            <Button id="jiaoben" size="small">
              开始
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
