import React from "react";
import $ from "jquery";
import { Link, useHistory } from "react-router-dom";
import { Login, User } from "../api";
import localforage from "localforage";
import { user } from "../redux/actions"
import { useDispatch } from "react-redux";
const login = () => {
    const [formdata, setData] = React.useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const route = useHistory()
    const [error, setError] = React.useState('')
    const sub = (e: any) => {
        e.preventDefault()
        Login(formdata).then((e) => {

            localforage.setItem('token', e.data.token).then(() => {
                User(e.data.token).then((e) => {
                    localforage.setItem('user', e[0])
                    dispatch(user(e[0]))
                    route.push('/shop')

                })
            })
        }).catch((ee) => {


            setError(JSON.stringify(ee))
        })
    }
    React.useEffect(() => {
        $("classicHeader").removeClass("classicHeader");
    }, []);
    return (
        <div id="page-content">
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper">
                        {error ? <h1 style={{ color: '#e35d6a' }} className="page-width red">Your Email and Password is not valid</h1> : <h1 className="page-width">Login</h1>}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                        <div className="mb-4">
                            <form
                                onSubmit={sub}
                                action="#"
                                id="CustomerLoginForm"
                                accept-charset="UTF-8"
                                className="contact-form"

                            >
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="CustomerEmail">Email</label>
                                            <input
                                                type="email"
                                                name="customer[email]"
                                                placeholder=""
                                                id="CustomerEmail"
                                                className=""
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                autoFocus
                                                value={formdata.email}
                                                onChange={(e) => {
                                                    setError('')
                                                    setData({ ...formdata, email: e.target.value })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="CustomerPassword">Password</label>
                                            <input
                                                type="password"

                                                name="customer[password]"
                                                placeholder=""
                                                id="CustomerPassword"
                                                value={formdata.password}
                                                onChange={(e) => setData({ ...formdata, password: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                        <input type="submit" className="btn mb-3" value="Sign In" />
                                        <p className="mb-4">
                                            <a href="#" id="RecoverPassword">
                                                Forgot your password?
                                            </a>{" "}
                                            &nbsp; | &nbsp;
                                            <Link to="register" id="customer_register_link">
                                                Create account
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;
