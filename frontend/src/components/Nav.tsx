import React from "react";
import Logo from "../assets/logo.jpg";
import style from "../css/components/Nav.css";
const Nav = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={Logo} />
      </div>
      <nav className={style.nav1}>
        <ul>
          <li>Home</li>
          <li>PRODUCTS</li>{" "}
          {/*isko dropdown button bnale => nahi vo phone ma acha lag tha hai desktop ma nahi*/}
          <li>BLOG</li>{" "}
          {/*isme blog ki kya jrurt h?? => hai user ke complent blog ma aati hai*/}
          <li>CONTACT</li>
        </ul>
        <span></span>
      </nav>
      <nav className={style.nav2}>
        <ul>
          <li>
            <i>search</i>
          </li>
          <li>
            <i>cart</i>
          </li>
          <li>
            <i>order</i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
