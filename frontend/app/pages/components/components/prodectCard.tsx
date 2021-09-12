import React from "react";
import style from "./css/Card.module.css";
const ProdectCard = ({ name, type, price }: any) => {
  return (
    <div className={style.Card}>
      <div className={style.top}>
        <h1 className={style.heading}>{name}</h1>
        <p className={style.subheading}>{type}</p>
      </div>
      <div className={style.slides}></div>
      <p className={style.price}>{price}</p>
    </div>
  );
};

export default ProdectCard;
