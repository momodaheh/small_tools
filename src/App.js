
import styles from "./App.css";
import logo from "../src/assets/img/logo.jpg"

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
function App() {
  return (
    <div className={styles.all}>
      <div className="bian">
        <div>
          <img src={logo} className="logo"></img>
        </div>
      </div>
      <div className="center">
        <div className="menu">
          {menuitems.map((item, index) => {
            return (
              <div className="menuitem" key={index}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="content">

        </div>
      </div>

      <div className="bian"></div>
    </div>
  );
}
export default App;
