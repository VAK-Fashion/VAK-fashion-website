import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
    const [open, setOpen] = React.useState(false)
   
    return (
        <>
        <div className={`search ${open ? 'search--opened ' : ''}`}>
            <div className="search__form">
                <form className="search-bar__form" action="#">
                    <button className="go-btn search__button" type="submit"><i className="icon anm anm-search-l"></i></button>
                    <input className="search__input" type="search" name="q" value="" placeholder="Search entire store..." aria-label="Search" autoComplete="off" />
                </form>
                <button type="button" onClick={() => setOpen(false)} className="search-trigger close-btn"><i className="anm anm-times-l"></i></button>
            </div>
        </div>
        <div className="top-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-5 col-lg-4">
                        <p className="phone-no">
                            <i className="anm anm-phone-s"></i>{" "}
                            +91 8080754160
                        </p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                        <div className="text-center"><p className="top-header_middle-text"> Nagpur Express Shipping</p></div>
                    </div>
                    <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                        <span className="user-menu d-block d-lg-none"><i className="anm anm-user-al" aria-hidden="true"></i></span>
                        <ul className="customer-links list-inline">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Create Account</Link></li>
                            <li><Link to="/wishlist">Wishlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-wrap classicHeader animated d-flex">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                        <Link to="/">
                            <img src='/assets/images/logo.svg' alt="logo" />
                        </Link>
                    </div>
                    <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                        <div className="d-block d-lg-none">
                            <button className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                                <i className="icon anm anm-times-l"></i>
                                <i className="anm anm-bars-r"></i>
                            </button>
                        </div>
                        <nav className="grid__item" id="AccessibleNav">

                            <ul id="siteNav" className="site-nav medium center hidearrow">
                                {[{
                                    name: 'Home',
                                    subnav: [
                                        {
                                            name: 'Home Group 1',
                                            subLink: [
                                                "Home 1 - Classic",
                                                'Home 2 - Default',
                                                'Home 15 - Furniture',
                                                'Home 3 - Boxed',
                                                'Home 4 - Fullwidth',
                                                'Home 5 - Cosmetic',
                                                'Home 6 - Modern',
                                                'Home 7 - Shoes'
                                            ]
                                        },
                                        {
                                            name: 'Home Group 2',
                                            subLink: [
                                                "Home 8 - Jewellery",
                                                'Home 9 - Parallax',
                                                'Home 10 - Minimal',
                                                'Home 11 - Grid',
                                                'Home 12 - Category',
                                                'Home 13 - Auto Parts',
                                                'Home 14 - Bags',
                                            ]
                                        }
                                    ]
                                }, {
                                    name: 'Shop',
                                    subnav: [
                                        {
                                            name: 'Shop Pages',
                                            subLink: [
                                                "Left Sidebar",
                                                'Right Sidebar',
                                                'Fullwidth',

                                            ]
                                        },
                                        {
                                            name: 'Shop Features',
                                            subLink: [
                                                "Home 8 - Jewellery",
                                                'Home 9 - Parallax',
                                                'Home 10 - Minimal',
                                                'Home 11 - Grid',
                                                'Home 12 - Category',
                                                'Home 13 - Auto Parts',
                                                'Home 14 - Bags',
                                            ]
                                        }
                                    ]
                                }, {
                                    name: 'Product',
                                    subnav: [
                                        {
                                            name: 'Shop Pages',
                                            subLink: [
                                                "Left Sidebar",
                                                'Right Sidebar',
                                                'Fullwidth',

                                            ]
                                        },
                                        {
                                            name: 'Shop Features',
                                            subLink: [
                                                "Home 8 - Jewellery",
                                                'Home 9 - Parallax',
                                                'Home 10 - Minimal',
                                                'Home 11 - Grid',
                                                'Home 12 - Category',
                                                'Home 13 - Auto Parts',
                                                'Home 14 - Bags',
                                            ]
                                        }
                                    ]
                                }, {
                                    name: 'Blog',
                                    subnav: [
                                        {
                                            name: 'Shop Pages',
                                            subLink: [
                                                "Left Sidebar",
                                                'Right Sidebar',
                                                'Fullwidth',

                                            ]
                                        },
                                        {
                                            name: 'Shop Features',
                                            subLink: [
                                                "Home 8 - Jewellery",
                                                'Home 9 - Parallax',
                                                'Home 10 - Minimal',
                                                'Home 11 - Grid',
                                                'Home 12 - Category',
                                                'Home 13 - Auto Parts',
                                                'Home 14 - Bags',
                                            ]
                                        }
                                    ]
                                }].map((v, i) => (
                                    <li key={i} className="lvl1 parent megamenu">
                                        <Link to="#">{v.name}
                                            <i className="anm anm-angle-down-l"></i></Link>
                                        <div className="megamenu style1">
                                            <ul className="grid mmWrapper">
                                                <li className="grid__item large-up--one-whole">
                                                    <ul className="grid">

                                                        {v.subnav.map((vv, ii) => (
                                                            <li key={ii} className="grid__item lvl-1 col-md-3 col-lg-3"><Link to="#"
                                                                className="site-nav lvl-1">{vv.name}</Link>
                                                                <ul className="subLinks">
                                                                    {vv.subLink.map((vvv, iii) => (

                                                                        <li className="lvl-2" key={iii}><Link to="/"
                                                                            className="site-nav lvl-2">{vvv}</Link></li>
                                                                    ))}

                                                                </ul>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                        <div className="logo">
                            <a href="index.html">
                                <img src='/assets/images/logo.svg' alt="Belle Multipurpose Html Template"
                                    title="Belle Multipurpose Html Template" />
                            </a>
                        </div>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                        <div className="site-cart">
                            <a href="#;" className="site-header__cart" title="Cart">
                                <i className="icon anm anm-bag-l"></i>
                                <span id="CartCount" className="site-header__cart-count"
                                    data-cart-render="item_count">2</span>
                            </a>



                        </div>
                        <div className="site-header__search">
                            <button type="button" onClick={() => setOpen(true)} className="search-trigger"><i className="icon anm anm-search-l"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-nav-wrapper"></div>
    </>
    )
}

export default Nav
