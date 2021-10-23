{
    /* <div className="formFeilds contact-form form-vertical">
                          <form action="http://annimexweb.com/items/belle/assets/php/mail.php" method="post"  id="contact_form" className="contact-form">	
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <input type="text" id="ContactFormName" name="name" placeholder="Name" value="" required="">
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                              <input type="email" id="ContactFormEmail" name="email" placeholder="Email" value="" required="">                        	
                                </div>
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                <input required="" type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number" value="">
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                <input required="" type="text" id="ContactSubject" name="subject" placeholder="Subject" value="">
                                </div>
                              </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                <textarea required="" rows="10" id="ContactFormMessage" name="message" placeholder="Your Message"></textarea>
                                </div>
                            </div>  
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" className="btn" value="Send Message">
                            </div>
                         </div>
                         </form> */
}

//   apn ye data ko loop m dal skte hn??? ruk datta ha yessssssssssssssssssssssssssss

// ek bar kr k btata ky???
//ok
[
    {
        isInput: "true?false",
        type: "input type",
        placeholder: "input placeholder",
        className: "class name",
    },//one input
    {
        isInput: "true?false",//input ha to true or textarea ha to false
        type: "input type",//input ma use type
        placeholder: "input placeholder",//input ma use placeholder
        className: "class name",//input use classes
        //ab kay pur code kar ke du kay
    },//Two input
    {
        isInput: "true?false",
        type: "input type",
        placeholder: "input placeholder",
        className: "class name",
    },//three input and so on = ek bar second wale ko update kr k bta =  mtlb 2nd m bhi tho kuch changes krne pdege n
].map((v, i) => <Row>
    <Col>
        <div className="form-group">
    {v.isInput?<input type ={v.type } className={v.className} value="Send Message">: <textarea required="" rows="10" id="ContactFormMessage" name="message" placeholder="Your Message"></textarea>}
        </div>
    </Col>
</Row>);
//smja kay =  h but ye kam kese krega? coz ishe ye tho btaya hi nhi h ki diffeence ky rhga.........
