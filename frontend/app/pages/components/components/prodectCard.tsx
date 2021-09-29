import React from "react";
import style from "./css/Card.module.css";
const ProdectCard = ({ name, type, price,image}: any) => {
  const [crr, setCrr] = React.useState(0)
  React.useEffect(() => {

    const intervalId = setInterval(() => {
        setCrr((prev) => {
            return prev + 1 === image.length ? 0 : prev + 1;
        });
    }, 5000);
    return () => {
        clearInterval(intervalId);
    };
}, []);
  return (
    <div className={style.Card}>
      <div className={style.top}>
        <h1 className={style.heading}>{name}</h1>
        <p className={style.subheading}>{type}</p>
      </div>
      <div className={style.slides}>
        <div>
        <img src={image[crr]} className={style.Img} alt={image[crr]} />
        </div>
      </div>
      <p className={style.price}>{price}</p>
    </div>
  );
};

export default ProdectCard;
