import React from "react";
import LayoutComponent from "../../components/layouts/LayoutComponent";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      <div className="pt-16">
        <div className="str">
          <div className="ban-inn ab-ban pg-cont">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span>We are here to assist you.</span>
                    <h1>Contact us</h1>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END */}
      {/* START */}
      <section>
        <div className="ab-sec2 pg-cont">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="we-here">
                    <h3>Our office</h3>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <span>
                      <i className="fa fa-phone" aria-hidden="true" /> +92
                      (8800) 68 - 8960
                    </span>
                    <span>
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                      help@company.com
                    </span>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                      28800 Orchard Lake Road, Suite 180 Farmington Hills,
                      U.S.A.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src="images/icon/trust.png" alt="" />
                    <h4>Customer Relations</h4>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <a href="#!" className="cta-rou-line">
                      Get Support
                    </a>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src="images/icon/telephone.png" alt="" />
                    <h4>WhatsApp Support</h4>
                    <p>
                      Most Trusted and premium Matrimony Service in the World.
                    </p>
                    <a href="#!" className="cta-rou-line">
                      Talk to sales
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* REGISTER */}
      <section>
        <div className="login pg-cont">
          <div className="container">
            <div className="row">
              <div className="inn">
                <div className="lhs">
                  <div className="tit">
                    <h2>
                      Now <b>Contact to us</b> Easy and fast.
                    </h2>
                  </div>
                  <div className="im">
                    <img src="images/login-couple.png" alt="" />
                  </div>
                  <div className="log-bg">&nbsp;</div>
                </div>
                <div className="rhs">
                  <div>
                    <div className="form-tit">
                      <h4>Let's talk</h4>
                      <h1>Send your enquiry now</h1>
                    </div>
                    <div className="form-login">
                      <form
                        className="cform fvali"
                        method="post"
                        action="https://rn53themes.net/themes/matrimo/mail/mail-contact.php"
                      >
                        <div
                          className="alert alert-success cmessage"
                          style={{ display: "none" }}
                          role="alert"
                        >
                          Your message was sent successfully.
                        </div>
                        <div className="form-group">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            name="phone"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Message:</label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            placeholder="Enter message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Send Enquiry
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="ab-team pg-abo-ab-team">
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <p>OUR PROFESSIONALS</p>
                <h2>
                  <span>Meet Our Team</span>
                </h2>
                <span className="leaf1" />
              </div>
              <ul>
                <li>
                  <div>
                    <img src="images/profiles/6.jpg" alt="" loading="lazy" />
                    <h4>Ashley Jen</h4>
                    <p>Marketing Manager</p>
                    <ul className="social-light">
                      <li>
                        <a href="#!">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="images/profiles/7.jpg" alt="" loading="lazy" />
                    <h4>Ashley Jen</h4>
                    <p>Marketing Manager</p>
                    <ul className="social-light">
                      <li>
                        <a href="#!">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="images/profiles/8.jpg" alt="" loading="lazy" />
                    <h4>Emily Arrov</h4>
                    <p>Creative Manager</p>
                    <ul className="social-light">
                      <li>
                        <a href="#!">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="images/profiles/9.jpg" alt="" loading="lazy" />
                    <h4>Julia sear</h4>
                    <p>Client Coordinator</p>
                    <ul className="social-light">
                      <li>
                        <a href="#!">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* FOOTER */}
      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span>Free support:</span> +92 (8800) 68 - 8960
              &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span> info@example.com
            </h2>
          </div>
          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>
                Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
              </p>
              <p>
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <a href="about-us.html">About company</a>
                </li>
                <li>
                  <a href="#!">Contact us</a>
                </li>
                <li>
                  <a href="#!">Feedback</a>
                </li>
                <li>
                  <a href="about-us.html#faq">FAQs</a>
                </li>
                <li>
                  <a href="about-us.html#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <a href="#!">
                    <img src="images/social/1.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/3.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/5.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row foot-count">
            <p>
              Company name Site - Trusted by over thousands of Boys &amp; Girls
              for successfull marriage.
              <a href="sign-up.html" className="btn btn-primary btn-sm">
                Join us today !
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* END */}
      {/* COPYRIGHTS */}
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright © <span id="cry">2017-2020</span>
                <a href="#!" target="_blank">
                  Company.com
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
