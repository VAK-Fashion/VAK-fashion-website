import React from "react";
import style from "./css/App.css";
import Img from "./assets/img/1.jpg";
const App = () => {
  console.log("ok");

  return (
    <section className={style.Home}>
      <div className={style.slide1}>
        <div className={style.Info}>
          <h2>Committed To Quality, Committed To You </h2>
        </div>
        {/* <img alt="mode" src={Img} /> */}
      </div>
      <div className={style.controllers}>
        <div className={style.controllers1}>
          <span></span>
        </div>
        <div className={style.controllers2}>
          <span></span>
        </div>
        <div className={style.controllers3}>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default App;
