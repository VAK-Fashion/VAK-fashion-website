import React from "react";
import { SignUp } from "../api";

const register = () => {
  const [fomdata, setForm] = React.useState({
    firstName: '',
    LastName: '',
    email: '',
    password: '',
  })
  return (
    <div>
      <div id="page-content">
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="page-width">Create an Account</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
              <div className="mb-4">
                <form
                  onSubmit={(e) => { e.preventDefault(); SignUp(fomdata) }}
                  id="CustomerLoginForm"
                  accept-charset="UTF-8"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                          type="text"
                          name="customer[first_name]"
                          placeholder=""
                          id="FirstName"
                          autoFocus
                          value={fomdata.firstName}
                          onChange={(e) => setForm({ ...fomdata, firstName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="LastName">Last Name</label>
                        <input
                          type="text"
                          name="customer[last_name]"
                          placeholder=""
                          id="LastName"
                          value={fomdata.LastName}
                          onChange={(e) => setForm({ ...fomdata, LastName: e.target.value })}
                        />
                      </div>
                    </div>
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
                          value={fomdata.email}
                          onChange={(e) => setForm({ ...fomdata, email: e.target.value })}
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
                          value={fomdata.password}
                          onChange={(e) => setForm({ ...fomdata, password: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="submit"
                        className="btn mb-3"
                        value="Create"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
