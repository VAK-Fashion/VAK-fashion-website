import React from "react";
import style from "./style/HotDeal.module.css";
import img from "./assets/2.png";
import moment from "moment";
const HotDeal = () => {
  const [time, setTime] = React.useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  setInterval(() => {
    const timeTillDate = "08 22 2021, 6:00 am";
    const timeFormat = "MM DD YYYY, h:mm a";
    const then: any = moment(timeTillDate, timeFormat);
    const now: any = moment();
    const countdown = moment(then - now);
    const days = countdown.format("D");
    const hours = countdown.format("HH");
    const minutes = countdown.format("mm");
    const seconds = countdown.format("ss");
    setTime({ days, hours, minutes, seconds });
  }, 1000);

  //   console.log(time);

  return (
    <div className={style.HotDeal}>
      <div className={style.right}>
        <div className={style.Info}>
          <div className={style.text}>
            <h1>HOT DEAL This week</h1>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike man who are beguiled and demoralize
            </p>
          </div>
          <div className={style.Timeline}>
            <div className={style.days}>
              <h1>{time.days}</h1>
              <p>Day</p>
            </div>
            <div className={style.hours}>
              <h1>{time.hours}</h1>
              <p>Hours</p>
            </div>
            <div className={style.mins}>
              <h1>{time.minutes}</h1>
              <p>Mins</p>
            </div>
            <div className={style.secs}>
              <h1>{time.seconds}</h1>
              <p>Secs</p>
            </div>
          </div>
          <div className={style.button}>
            <button type="button">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className={style.left}>
        <div className={style.Infos}>
          <h1>
            SAL<span>E UP 50%</span>
          </h1>
        </div>
        {/* <img src={img} /> */}
      </div>
    </div>
  );
};

export default HotDeal;
