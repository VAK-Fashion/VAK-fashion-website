import React from "react";
import style from "./style/Foot.module.css";
import Img from "../1.jpg"
const slides: Array<JSX.Element> = [
  <div className={style.slide1}>
    {/* <img src="https://source.unsplash.com/user/erondu/1600x900" /> */}
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto commodi ut ullam repudiandae ipsum cum, porro a velit, consectetur officiis natus repellat? Aperiam necessitatibus beatae esse porro veritatis quo."</p>
  </div>,
  <div className={style.slide1}>
    {/* <img src="https://source.unsplash.com/user/HillshireFarm/1600x900" /> */}
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto commodi ut ullam repudiandae ipsum cum, porro a velit, consectetur officiis natus repellat? Aperiam necessitatibus beatae esse porro veritatis quo."</p>
  </div>,
  <div className={style.slide1}>
    {/* <img src="https://source.unsplash.com/user/Daniel/1600x900" /> */}
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto commodi ut ullam repudiandae ipsum cum, porro a velit, consectetur officiis natus repellat? Aperiam necessitatibus beatae esse porro veritatis quo."</p>
  </div>,
]
const Footer = () => {
  const [slide, setSlide] = React.useState(0);
  console.log(slide);

  return (
    <div className={style.footer}>
      <header className={style.head} >

        <div>
          {/* <img src={Img} className={style.img} /> */}
          <div style={{ zIndex: 20 }}>
            <h1>SUBSCRIBE EMAIL</h1>
            <p>Get latest news & update from VAF</p>
            <div className={style.input}>
              <input type="email" placeholder="Enter Your Email Address" />
            </div>
          </div>
        </div>
        <div>
          <span className={style.leftarrow} onClick={() => setSlide(slide !== slides.length - 1 ? slide + 1 : 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
          </span>


          <div className={style.slides}>
            {slides[slide]}
          </div>
          <span className={style.rightarrow} onClick={() => setSlide(slide !== slides.length - 1 ? slide + 1 : 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
          </span>
        </div>

      </header>
      <footer className={style.foot}>
        <div className={style.products}>
          <h1>VAK Fashion</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe unde placeat tenetur sit enim quam. A pariatur autem mollitia voluptatibus necessitatibus sapiente corporis officiis nam.</p>
        </div>
        <div className={style.timing}>
          <h1>OPENING TIME</h1>
          <ul>
            <li> <p>Mon - Fri: 8AM - 10 PM</p></li>
            <li>
              <p>We Work All The Holidays</p>
            </li>
            <li>
              <p>SAT: 9AM - 8 PM</p>

            </li>
            <li>
              <p>SUN: Closed</p>

            </li>
          </ul>
        </div>
        <div className={style.about}>
          <h1>ABOUT US</h1>
          <ul>
            <li><p>Shoping Guide</p></li>
            <li> <p>Delivery information</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Our Store</p></li>
          </ul>
        </div>
        <div className={style.account}>
          <h1>ACCOUNT</h1>
          <ul>
            <li><p>Wishlist</p></li>
            <li><p>Order Tracking</p></li>
            <li><p>Shipping Info</p></li>
            <li><p>Return Policy</p></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
