import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Checkout = () => {
  return (
    <div id="page-content">
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper"><h1 className="page-width">Checkout</h1></div>
        </div>
      </div>
      <Container>
        <Row>
          <Col xl="6" lg="6" md="6" sm="12" className="mb-3">
            <div className="customer-box returning-customer">
              <h3><i className="icon anm am-user-al"></i>Returning customer? <a href="#customer-login" id="customer" className="text-white text-decoration-underline" data-toggle="collapse">Click here to login</a></h3>
              <div id="customer-login" className="collapse customer-content">
                <div className="customer-info">
                  <p className="coupon-text">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please procees to the Billing &amp; Shipping section.</p>
                  <form>
                    <Row>
                      {[
                        {
                          html: "exampleInputEmail1",
                          name: "Email address",
                          type: "email",
                          class: "no-margin",
                        },
                        {
                          html: "exampleInputPassword1",
                          name: "Password",
                          type: "password",
                          class: "",
                        },
                      ].map((v, i) => (
                        <Col xl="6" sm="12" lg="6" md="6" className="form-group">
                          <label htmlFor={v.html}>{v.name}<span className="required-f">*</span></label>
                          <input type={v.type} className={v.class} id={v.html} />
                        </Col>)
                      )}
                    </Row>
                    <Row>
                      <Col md="12">
                        <div className="form-check width-100 margin-20px-bottom">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" /> Remember me!
                          </label>
                          <a href="#" className="float right">Forgot your password</a>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" className="mb-3">
            <div className="customer-box customer-coupon">
              <h3 className="font-15 xs-font-12"><i className="icon anm anm-gift-l"></i>Have a coupon? <a href="#have-coupon" className="text-white text-decoration-underline" data-toggle="collapse">Click here to enter your code</a></h3>
              <div id="have-coupon" className="collapse coupon-checkout-content">
                <div className="discount-coupon">
                  <div id="coupon" className="coupon-dec tab-pane active">
                    <p className="margin-10px-bottom">Enter your coupon code if you have one.</p>
                    <label htmlFor="coupon-code" className="requried get"><span className="required-f">*</span>Coupon</label>
                    <input type="text" id="coupon-code" className="mb-3" required />
                    <button className="coupon-btn btn" type="submit">Apply Coupon</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="billing-fiels">
          <Col xl="6" lg="6" md="6" sm="12" className="sm-margin-30px-bottom">
            <div className="create-ac-content bg-light-gray padding-20px-all">
              <form>
                <fieldset>
                  <h2 className="login-title mb-3">Billing detail</h2>
                  {[
                    {
                      title: "First Name",
                      title2: "Last Name",
                      name: "firstname",
                      name2: "lastname",
                      id: "input-firstname",
                      id2: "input-lastname",
                      type: "text",
                      type2: "text",
                    },
                    {
                      title: "E-mail",
                      title2: "Telephone",
                      name: "email",
                      name2: "telephone",
                      id: "input-email",
                      id2: "input-telephone",
                      type: "email",
                      type2: "tel",
                    }
                  ].map((v, i) =>
                    <>
                      <Row>
                        <Col md="6" lg="6" xl="6" className="form-group">
                          <label htmlFor={v.id}>{v.title}<span className="required-f">*</span></label>
                          <input name={v.name} value="" id={v.id} type={v.type} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" lg="6" xl="6" className="form-group">
                          <label htmlFor={v.id2}>{v.title2}<span className="required-f">*</span></label>
                          <input name={v.name2} value="" id={v.id2} type={v.type2} />
                        </Col>
                      </Row>
                    </>
                  )}
                </fieldset>
                <fieldset>
                  {[
                    {
                      title: "Company",
                      title2: "Address",
                      name: "company",
                      name2: "address_1",
                      id: "input-company",
                      id2: "input-address-1",
                      type: "text",
                      type2: "text",
                    },
                    {
                      title: "Apartment",
                      title2: "City",
                      name: "address_2",
                      name2: "city",
                      id: "input-address-2",
                      id2: "input-city",
                      type: "text",
                      type2: "text",
                    }
                  ].map((v, i) => (
                    <>
                      <Row>
                        <Col md="6" lg="6" xl="6" className="form-group">
                          <label htmlFor={v.id}>{v.title}<span className="required-f">*</span></label>
                          <input name={v.name} value="" id={v.id} type={v.type} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6" lg="6" xl="6" className="form-group">
                          <label htmlFor={v.id2}>{v.title2}<span className="required-f">*</span></label>
                          <input name={v.name2} value="" id={v.id2} type={v.type2} />
                        </Col>
                      </Row>
                    </>
                  )
                  )}
                  <Row>
                    <Col md="6" lg="6" xl="6" className="form-group">
                      <label htmlFor="input-postcode">Post Code<span className="required-f">*</span></label>
                      <input name="postcode" value="" id="input-postcode" type="text" />
                    </Col>
                    <Col md="6" lg="6" xl="6" className="form-group">
                      <label htmlFor="input-country">Country<span className="required-f">*</span></label>
                      <select name="country-id" id="input-country">
                        <option value=""> --- Please Select--- </option>
                        <option value="244">Aaland Islands</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" lg="6" xl="6" className="form-group">
                      <label htmlFor="input-zone">Region / State <span className="required-f">*</span></label>
                      <select name="zone-id" id="input-zone">
                        <option value=""> --- Please Select--- </option>
                        <option value="3513">Aberdeen</option>
                        <option value="3514">Aberdeenshire</option>
                        <option value="3515">Anglesey</option>
                        <option value="3516">Angus</option>
                      </select>
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <Row>
                    <Col className="form-group form-check" md="12" lg="12" xl="12">
                      <label className="form-check-label padding-15px-left">
                        <input type="checkbox" className="form-check-input" value="" /><strong>Create an account</strong>
                      </label>
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <Row>
                    <Col className="form-group form-check" md="12" lg="12" xl="12">
                      <label htmlFor="input-company">Order Notes <span className="required-f">*</span></label>
                      <textarea rows={3} className="form-control resize-both"></textarea>
                    </Col>
                  </Row>
                </fieldset>
              </form>
            </div>
          </Col>
          <Col xl="6" lg="6" md="6" sm="12">
            <div className="your-order-payment">
              <div className="your-order">
                <h2 className="order-title md-4">Your Order</h2>
                <div className="table-response-sm order-table">
                  <table className="bg-white table table-border table-hover text-center">
                    <thead>
                      <th className="text-left">Product Name</th>
                      <th>Prize</th>
                      <th>Size</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </thead>
                    <tbody>
                      {[
                        {
                          title: "Spike Jacket",
                          rate: "$99",
                          size: "S",
                          num: "1",
                          dis: "$99",
                        },
                        {
                          title: "Argon Sweater",
                          rate: "$199",
                          size: "M",
                          num: "2",
                          dis: "$289",
                        },
                        {
                          title: "Babydoll Bow Dress",
                          rate: "$299",
                          size: "XL",
                          num: "3",
                          dis: "$398",
                        },
                      ].map((v, i) =>
                        <tr key={i}>
                          <td className="text-left">{v.title}</td>
                          <td>{v.rate}</td>
                          <td>{v.size}</td>
                          <td>{v.num}</td>
                          <td>{v.dis}</td>
                        </tr>
                      )}
                    </tbody>
                    <tfoot className="font-weight-600">
                      <tr>
                        <td colSpan={4} className="text-right">Shipping</td>
                        <td>$50.00</td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="text-right">Total</td>
                        <td>$845.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <hr />
              <div className="your-payment">
                <h2 className="payment-title mb-3">payment method</h2>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div className="payment-section" id="accordion">
                      <div id="accordion" className="payment-section">
                        <div className="card mb-2">
                          <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">Direct Bank Transfer </a>
                          </div>
                          <div id="collapseOne" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                              <p className="no-margin font-15">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-2">
                          <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Cheque Payment</a>
                          </div>
                          <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                              <p className="no-margin font-15">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card margin-15px-bottom border-radius-none">
                          <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree"> PayPal </a>
                          </div>
                          <div id="collapseThree" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                              <p className="no-margin font-15">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-2">
                          <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour"> Payment Information </a>
                          </div>
                          <div id="collapseFour" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                              <fieldset>
                                <Row>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="input-cardname">Name on Card <span className="required-f">*</span></label>
                                    <input name="cardname" value="" placeholder="Card Name" id="input-cardname" className="form-control" type="text" />
                                  </Col>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="input-country">Credit Card Type <span className="required-f">*</span></label>
                                    <select name="country_id" className="form-control">
                                      <option value=""> --- Please Select --- </option>
                                      <option value="1">American Express</option>
                                      <option value="2">Visa Card</option>
                                      <option value="3">Master Card</option>
                                      <option value="4">Discover Card</option>
                                    </select>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="input-cardno">Credit Card Number  <span className="required-f">*</span></label>
                                    <input name="cardno" value="" placeholder="Credit Card Number" id="input-cardno" className="form-control" type="text" />
                                  </Col>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="input-cvv">CVV Code <span className="required-f">*</span></label>
                                    <input name="cvv" value="" placeholder="Card Verification Number" id="input-cvv" className="form-control" type="text" />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <label>Expiration Date <span className="required-f">*</span></label>
                                    <input type="date" name="exdate" className="form-control" />
                                  </Col>
                                  <Col md="6" lg="6" xl="6" className="form-group">
                                    <img className="padding-25px-top xs-padding-5px-top" src="assets/images/payment-img.jpg" alt="card" title="card" />
                                  </Col>
                                </Row>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-button-payment">
                    <button className="btn" value="Place order" type="submit" >Place order</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
