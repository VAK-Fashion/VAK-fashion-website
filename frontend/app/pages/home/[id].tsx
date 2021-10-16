import router from "next/router";
import React from "react";
import style from "./style/main.module.css";
// loaclhost:3000/home/<name> :<name> ma kuch bh like 
const productview = () => {
    const { id } = router.query
    React.useEffect(() => {

    }, [])
    const [Category, SetCategory] = React.useState(false)
    const [Size, SetSize] = React.useState(false)
    const [Material, SetMaterial] = React.useState(false)
    return (
        <div className={style.sidebar}>
            <div>
                <ul>
                    <li>
                        <div onClick={() => SetCategory(Category ? false : true)} >
                            <h1>Category</h1>
                            {Category ? <svg style={{
                                transform: 'rotate(180deg)',



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg> : <svg style={{



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>}
                        </div>
                        <ul>
                            {
                                Category ? ["Kurti", "Jeans", "Jeans", "Leggings"].map((v, i) => (<li key={i}>
                                    <input type="checkbox" /> <p >{v}</p></li>
                                )) : null
                            }
                        </ul>
                    </li>
                    <li>
                        <div>
                            <h1>Prize</h1>
                        </div>
                        <input type="range" />
                    </li>
                    <li>
                        <div onClick={() => SetSize(Size ? false : true)}>
                            <h1>Size</h1>
                            {Size ? <svg style={{
                                transform: 'rotate(180deg)',



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg> : <svg style={{



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>}
                        </div>
                        <ul>
                            {Size ? ["S", "M", "L", "XL", "XXL", "XXXL"].map((v, i) => (<li key={i}>
                                <input type="checkbox" /> <p  >{v}</p></li>
                            )) : null}
                        </ul>
                    </li>
                    <li>
                        <div onClick={() => SetMaterial(Material ? false : true)}>
                            <h1>Material</h1>
                            {Material ? <svg style={{
                                transform: 'rotate(180deg)',



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg> : <svg style={{



                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>}
                        </div>
                        <ul>
                            {Material ? ["Cotton", "Nicra"].map((v, i) => (
                                <li value={v} key={i}>
                                    <input type="checkbox" />
                                    <li >{v}</li>
                                </li>
                            )) : null}
                        </ul>
                    </li>
                </ul>
            </div>
            {/* <div>
                <div >
                    <img src="https://th.bing.com/th/id/OIP.a1ssDQ631moi5St7XxVr7AHaLR?pid=ImgDet&rs=1" alt="Avatar"  />
                    <div >
                        <h4><b>Jane Doe</b></h4>
                        <p>Interior Designer</p>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
export default productview
