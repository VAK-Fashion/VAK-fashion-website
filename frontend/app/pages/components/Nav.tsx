import { NextPage } from 'next'
import React from 'react'
import style from "./style/Nav.module.css";
const Nav = ({ children }: any) => {
    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <h1>VF</h1>
                </div>
                <nav className={style.nav1}>
                    <ul>
                        <li>Home</li>
                        <li>PRODUCTS</li>{" "}

                        <li>BLOG</li>{" "}
                        <li>

                            CONTACT

                        </li>
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
            {children}
        </>
    )
}

export default Nav
