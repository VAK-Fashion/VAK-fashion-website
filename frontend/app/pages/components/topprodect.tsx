import React from "react";
import ProdectCard from "./components/prodectCard";
import style from "./style/topprodect.module.css";
const topic: any[] = [
  "female", "woman", "girls", "boy", "model", "fashion", "leggings", "workout", "ftv", "men", "male", ""
]
const TopP = () => {
  return (
    <div className={style.topprodects} id="TopPro">
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
            <ProdectCard name="kurti" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="classic" price="&#8377;230" />
            <ProdectCard name="legging" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="new" price="&#8377;145" />
            <ProdectCard name="kurti" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="classic" price="&#8377;200" />
          </div>
          <div className={style.Card}>
            <ProdectCard name="legging" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="new" price="&#8377;150" />
            <ProdectCard name="kurti" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="classic" price="&#8377;250" />
            <ProdectCard name="legging" image={[`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`,`https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`]} type="new" price="&#8377;135" />
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
