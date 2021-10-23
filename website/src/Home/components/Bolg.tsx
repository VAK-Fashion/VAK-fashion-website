import React from 'react'
import blog1 from '../../assets/images/blog/post-img1.jpg';
import blog2 from '../../assets/images/blog/post-img2.jpg';
import { Link } from "react-router-dom"
const Bolg = () => {
    return (
        <div className="latest-blog section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Latest From our Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {[{
                        date: 'May 02, 2017',
                        artical: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account...',
                        image: blog1
                    }, {
                        date: 'May 02, 2017',
                        artical: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
                        image: blog2
                    }].map((v, i) => (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="wrap-blog">
                                <Link to="/" className="article__grid-image">
                                    <img src={v.image} alt="It's all about how you wear" title="It's all about how you wear" className="blur-up lazyloaded" />
                                </Link>
                                <div className="article__grid-meta article__grid-meta--has-image">
                                    <div className="wrap-blog-inner">
                                        <h2 className="h3 article__title">
                                            <Link to="/">It's all about how you wear</Link>
                                        </h2>
                                        <span className="article__date">{v.date}</span>
                                        <div className="rte article__grid-excerpt">
                                            {v.artical}
                                        </div>
                                        <ul className="list--inline article__meta-buttons">
                                            <li><Link to="/">Read more</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Bolg
