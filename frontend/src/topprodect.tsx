import React from "react";
import ProdectCard from "./components/prodectCard";
import style from "./css/topprodect.css";
const TopP = () => {
  return (
    <div className={style.topprodects}>
      <div className={style.head}>
        <span className={style.rightBar}></span>
        <div className={style.infoHead}>
          <h1>Top PRODUCTS</h1>
          <p className={style.span}>Top Best of VF</p>
        </div>
        <span className={style.leftBar}></span>
      </div>
      <div className={style.main}>
        <div className={style.sidetext}>
          <h1>VAK FASHION</h1>
        </div>
        <div className={style.p}>
          <div className={style.Card}>
            <ProdectCard name="kurti" type="classic" price="&#8377;230" />
            <ProdectCard name="legging" type="new" price="&#8377;145" />
            <ProdectCard name="kurti" type="classic" price="&#8377;200" />
          </div>
          <div className={style.Card}>
            <ProdectCard name="legging" type="new" price="&#8377;150" />
            <ProdectCard name="kurti" type="classic" price="&#8377;250" />
            <ProdectCard name="legging" type="new" price="&#8377;135" />
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <button>Show More {">"}</button>
      </div>
    </div>
  );
};

export default TopP;
