import React from "react";
import style from "../css/components/catelog.css";
import leftimg from "../assets/img/1.jpg";

const Catelog = () => {
  return (
    <>
      <div className={style.c}>
        <div className={style.leftside}>
          <img src={leftimg} />
        </div>
        <div className={style.rightside}>
          <img src={leftimg} />
        </div>
      </div>
    </>
  );
};

export default Catelog;
