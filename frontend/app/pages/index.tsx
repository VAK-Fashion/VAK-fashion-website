import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Blog from './components/Blog'
import Footer from './components/Footer'
import HotDeal from './components/HotDeal'
import Nav from './components/Nav'
import TopP from './components/topprodect'
const Home: NextPage = () => {
  return (
    <>
      <Nav>
        <style
          dangerouslySetInnerHTML={{
            __html: `
      #__next{
        width:100%; height:100%
      }
      `,
          }}
        ></style>
        <section className={style.Home} id="home" >
          <div className={style.slide1}>
            <div className={style.Info}>
              <h2>Committed To Quality, Committed To You </h2>
            </div>
            {/* <img alt="mode" src={Img} /> */}
          </div>
          <div className={style.controllers}>
            <div className={style.controllers1}>
              <span></span>
            </div>
            <div className={style.controllers2}>
              <span></span>
            </div>
            <div className={style.controllers3}>
              <span></span>
            </div>
          </div>
        </section>
        <TopP  />
        <HotDeal />
        <Blog />
        <Footer />
      </Nav>
    </>
  )
}

export default Home
