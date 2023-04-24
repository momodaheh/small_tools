import React ,{ useState, useEffect }from "react";
import styles from "./index.module.scss";
import { get_Date } from "../../service/weather";
import { message } from "antd";

export default function Weather() {
  const [city,setcity] = useState("杭州")

  useEffect(() => {
    get_Date(city)
    .then((ret) =>{
      if(ret!=null){
        console.log(ret);
      }else{
        message.error("获取数据失败")
      }
    })
  },[city])

}
