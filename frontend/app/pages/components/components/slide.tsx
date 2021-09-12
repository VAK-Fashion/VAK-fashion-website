import React from 'react'
import style from "./css/slide.module.css"
const topic: any[] = [
    "female", "woman", "girls", "boy", "model", "fashion", "leggings", "workout", "ftv", "men", "male", ""
]

const slide = () => {
    const slides: any[] = [
        {
            name: "slide1",
            image: `https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`
        },
        {
            name: "slide2",
            image: `https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`
        },
        {
            name: "slide3",
            image: `https://source.unsplash.com/1600x900/?${topic[Math.floor(Math.random() * topic.length)]},${topic[Math.floor(Math.random() * topic.length)]}`
        },
    ]
    const [crr, setCrr] = React.useState(0)


    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCrr((prev) => {
                return prev + 1 === slides.length ? 0 : prev + 1;
            });
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={style.slide}>
            <div className={style.ImgCon}>
                <img src={slides[crr].image} className={style.Img} alt={slides[crr].name} />
            </div>
            <div className={style.controll}>
                <button disabled={crr === 0} onClick={() => setCrr(crr - 1)}>{"<"}</button>
                <button disabled={crr >= slides.length - 1} onClick={() => setCrr(crr + 1)}>{">"}</button>
            </div>
        </div>
    )
}

export default slide
