import React from "react";
import style from "./css/Blog.css";
const Blog = () => {
  return (
    <div className={style.blog}>
      <header className={style.head}>
        <span></span>
        <div>
          <h1>Blog</h1>
          <p>Last updated</p>
        </div>
        <span></span>
      </header>
      <div className={style.main}>
        <div className={style.subblog1}>
          <div className={style.bimg}>
            <img src="https://source.unsplash.com/900x900/?women,Leggin" />
          </div>
          <div className={style.info}>
            <p className={style.type}>Life Style</p>
            <h6>Clothing Manufacturing</h6>
            <p>
              Established in the year 2017 at Maharashtra, we “VAK Fashion LLP”
              are a Limited Liability Partnership based firm, engaged as the
              foremost Manufacturer of Churidar Leggings,..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className={style.subblog2}>
          <div className={style.info}>
            <p className={style.type}>Life Style</p>
            <h5>Clothing Manufacturing</h5>
            <p>
              Our apparels are comfortable to wear as the fabrics we use have
              soft texture and are skin-friendly. In bulk, we manufacture these
              apparels and distribute it across the wide market segments to meet
              with the demands of the apparel...
            </p>
            <button>Read More</button>
          </div>
          <div className={style.bimg}>
            <img src="https://source.unsplash.com/900x900/?femail,Leggin" />
          </div>
        </div>
      </div>
      <p className={style.p}>CRETIVE DESISIGN</p>
    </div>
  );
};

export default Blog;
