import React from "react";
import style from "../styles/Login.module.css"
import { useDispatch } from "react-redux";
import * as api from "../apis"
import * as actions from "../rudex/actions"
import Link from "next/link";
import Slide from "./components/components/slide";
const SignUp = () => {
    const dispatch = useDispatch();

    const [from, setFrom] = React.useState({
        email: "",
        password: "",
        username: "",
        PhoneNumber: "",
    })
    const [err, setErr] = React.useState({
        PhoneNumber: "",
        email: "",
        username: ""
    })
    const SMB = (e: any) => {
        setErr({
            PhoneNumber: "",
            email: "",
            username: ""
        })
        e.preventDefault();
        api.sign(from).then(r => {


            if (r.error !== undefined || r.error) {
                r.error.email ? setErr({ ...err, email: r.error.email[0] }) : ""
                r.error.username ? setErr({ ...err, username: r.error.username[0] }) : ""
                r.error.PhoneNumber ? setErr({ ...err, PhoneNumber: r.error.PhoneNumber[0] }) : ""
            }
            else {
                dispatch(actions.token(r.token))
                return r.token
            }
        }).then((r) => {
            if (r) {
                api.userInfo(r).then((r) => {
                    dispatch(actions.user(r))
                    return r
                })
            }
        })
    }
    return (
        <main className={style.main}>
            <div style={{ width: "50%" }}>
                <Slide />
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
            #__next{
                width:100%;
                height:100%;
            }
            body{
                background:#dcdfff;
            }
            body,#__next{
                display: flex;
align-items: center;
justify-content: center;
            }
            `
            }}></style>
            <div className={style.h}>
                <div className={style.head}>
                    <h1>Sign In</h1>
                    <p>COMMITTED TO QUALITY, COMMITTED TO YOU!</p>
                </div>
                <div className={style.google}>
                    <div>
                        <i>
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                                </g>
                            </svg>
                        </i>
                        <p>Sign in with Google</p>
                    </div>
                </div>
                <div className={style.span}>
                    <span></span>
                    <p>or Sign in with Email</p>
                    <span></span>
                </div>
                <div className={style.formCon}>
                    <form onSubmit={SMB} className={style.form}>
                        <div className={style.e}>
                            <h6 className={style.label}>Username*</h6>
                            <div className={style.input}>
                                <input placeholder="@yourname" value={from.username} onChange={(e) => setFrom({ ...from, username: e.target.value })} type="text" />
                            </div>
                        </div>
                        {err.username !== "" ? <p style={{ color: "tomato" }}>{err.username}</p> : ""}
                        <div className={style.e}>
                            <h6 className={style.label}>Email*</h6>
                            <div className={style.input}>
                                <input placeholder="yourname@website.com" value={from.email} onChange={(e) => setFrom({ ...from, email: e.target.value })} type="email" />
                            </div>
                        </div>
                        {err.email !== "" ? <p style={{ color: "tomato" }}>{err.email}</p> : ""}
                        <div className={style.p}>
                            <h6 className={style.label}>Password*</h6>
                            <div className={style.input}>
                                <input placeholder="****" type="password" value={from.password} onChange={(e) => setFrom({ ...from, password: e.target.value })} />
                            </div>
                        </div>
                        <div className={style.e}>
                            <h6 className={style.label}>Phone No*</h6>
                            <div className={style.input}>
                                <input placeholder="Phone Number" value={from.PhoneNumber} onChange={(e) => { e.target.value.length >= 15 ? alert("Your phone number is invalid") : setFrom({ ...from, PhoneNumber: e.target.value }) }}  type="tel" />
                            </div>
                        </div>
                        {err.PhoneNumber !== "" ? <p style={{ color: "tomato" }}>{err.PhoneNumber}</p> : ""}

                        <div className={style.other}>
                            <div className={style.checkbox}>
                                <input type="checkbox" />
                                <p>Remember me</p>
                            </div>
                        </div>
                        <div className={style.submit}>
                            <button> Registration </button>
                        </div>
                        <samp className={style.sam}><Link href="/login">Already have an account!</Link> </samp>
                    </form>
                    <samp className={style.pt}>@2021 VAK FASHION All rights reseved</samp>
                </div>
            </div>

        </main>
    )
}
export default SignUp