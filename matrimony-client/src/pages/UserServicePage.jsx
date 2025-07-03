import React from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";

const UserServicePage = () => {
  return (
    <>
      {/* <PreLoader /> */}
      <PopUpSearch />
      <TopMenu />
      <MenuPopUp1 />
      <MenuPopUp2 />
      <MainMenuBar />
      <ExploreMenuPopUp />
      <div className="hom-top">
        <div className="container">
          <div className="row">
            <div className="hom-nav">
              <div className="logo">
                <span className="menu desk-menu">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <a href="#" className="logo-brand">
                  <img
                    src="images/logo-b.png"
                    alt=""
                    loading="lazy"
                    className="ic-logo"
                  />
                </a>
              </div>

              <div className="bl">
                <ul>
                  <li className="smenu-pare">
                    <span className="smenu">Explore</span>
                    <div className="smenu-open smenu-box">
                      <div className="container">
                        <div className="row">
                          <h4 className="tit">Explore category</h4>
                          <ul>
                            <li>
                              <div className="menu-box menu-box-2">
                                <h5>
                                  Browse profiles{" "}
                                  <span>1200+ Verified profiles</span>
                                </h5>
                                <span className="explor-cta">More details</span>
                                <a
                                  href="/user/show-all-profiles"
                                  className="fclick"
                                ></a>
                              </div>
                            </li>
                            <li>
                              <div className="menu-box menu-box-1">
                                <h5>
                                  Wedding page <span>Make reservation</span>
                                </h5>
                                <span className="explor-cta">More details</span>
                                <a href="/user/user-wedding-page" className="fclick"></a>
                              </div>
                            </li>
                            <li>
                              <div className="menu-box menu-box-3">
                                <h5>
                                  All Services<span>Lorem ipsum dummy</span>
                                </h5>
                                <span className="explor-cta">More details</span>
                                <a href="/user/user-service-page" className="fclick"></a>
                              </div>
                            </li>
                            <li>
                              <div className="menu-box menu-box-4">
                                <h5>
                                  Join Now <span>Lorem ipsum dummy</span>
                                </h5>
                                <span className="explor-cta">More details</span>
                                <a href="#" className="fclick"></a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="smenu-pare">
                    <span className="smenu">All pages</span>
                    <div className="smenu-open smenu-multi">
                      <div className="container">
                        <div className="row">
                          <div className="multi-col">
                            <div className="inn">
                              <h4>Page sets 1</h4>
                              <ul>
                                <li>
                                  <a href="/user/show-all-profiles">
                                    All profiles
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Profile details</a>
                                </li>
                                <li>
                                  <a href="#">Wedding</a>
                                </li>
                                <li>
                                  <a href="#">Wedding video</a>
                                </li>
                                <li>
                                  <a href="#">Our Services</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="multi-col">
                            <div className="inn">
                              <h4>Page sets 2</h4>
                              <ul>
                                <li>
                                  <a href="#">Pricing plans</a>
                                </li>
                                <li>
                                  <a href="#">Login</a>
                                </li>
                                <li>
                                  <a href="#">Sign-up</a>
                                </li>
                                <li>
                                  <a href="#">Photo gallery</a>
                                </li>
                                <li>
                                  <a href="#">Photo gallery 1</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="multi-col">
                            <div className="inn">
                              <h4>Page sets 3</h4>
                              <ul>
                                <li>
                                  <a href="#">Contact</a>
                                </li>
                                <li>
                                  <a href="#">About</a>
                                </li>
                                <li>
                                  <a href="#">Blog</a>
                                </li>
                                <li>
                                  <a href="#">Blog detail</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="multi-col">
                            <div className="inn">
                              <h4>Page sets 4</h4>
                              <ul>
                                <li>
                                  <a href="#">Ask your doubts</a>
                                </li>
                                <li>
                                  <a href="#">Make Reservation</a>
                                </li>
                                <li>
                                  <a href="#">FAQ</a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Coming soon
                                  </a>
                                </li>
                                <li>
                                  <a href="#">404</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="multi-col full">
                            <div className="inn">
                              <h4>User dashboard pages</h4>
                              <ul>
                                <li>
                                  <a href="#">Dashboard</a>
                                </li>
                                <li>
                                  <a href="#">My profile</a>
                                </li>
                                <li>
                                  <a href="#">Interests</a>
                                </li>
                                <li>
                                  <a href="#">Chat lists</a>
                                </li>
                                <li>
                                  <a href="#">My plan details</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Profile settings
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Edit full profile
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Sign in</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="smenu-pare">
                    <span className="smenu">Top pages</span>
                    <div className="smenu-open smenu-single">
                      <ul>
                        <li>
                          <a href="/user/show-all-profiles">All profiles</a>
                        </li>
                        <li>
                          <a href="#">Profile details</a>
                        </li>
                        <li>
                          <a href="#">Wedding</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Blog detail</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Photo gallery</a>
                        </li>
                        <li>
                          <a href="#">Photo gallery 1</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">Sign-up</a>
                        </li>
                        <li>
                          <a href="#">Pricing plans</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Plans</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li className="smenu-pare">
                    <span className="smenu">Dashboard</span>
                    <div className="smenu-open smenu-single">
                      <ul>
                        <li>
                          <a href="#">Dashboard</a>
                        </li>
                        <li>
                          <a href="#">My profile</a>
                        </li>
                        <li>
                          <a href="#">Interests</a>
                        </li>
                        <li>
                          <a href="#">Chat lists</a>
                        </li>
                        <li>
                          <a href="#">My plan details</a>
                        </li>
                        <li>
                          <a href="#">Profile settings</a>
                        </li>
                        <li>
                          <a href="#">Edit full profile</a>
                        </li>
                        <li>
                          <a href="#">Sign in</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="al">
                <div className="head-pro">
                  <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                  <b>Advisor</b>
                  <br />
                  <h4>Ashley emyy</h4>
                  <span className="fclick"></span>
                </div>
              </div>

              <div className="mob-menu">
                <div className="mob-me-ic">
                  <span className="ser-open mobile-ser">
                    <img src="images/icon/search.svg" alt="" />
                  </span>
                  <span className="mobile-exprt" data-mob="dashbord">
                    <img src="images/icon/users.svg" alt="" />
                  </span>
                  <span className="mobile-menu" data-mob="mobile">
                    <img src="images/icon/menu.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mob-me-all mobile_menu">
        <div className="mob-me-clo">
          <img src="images/icon/close.svg" alt="" />
        </div>
        <div className="mv-bus">
          <h4>
            <i className="fa fa-globe" aria-hidden="true"></i> EXPLORE CATEGORYss
          </h4>
          <ul>
            <li>
              <a href="/user/show-all-profiles">Browse profiles</a>
            </li>
            <li>
              <a href="/user/user-wedding-page">Wedding page</a>
            </li>
            <li>
              <a href="/user/user-service-page">All Services</a>
            </li>
            <li>
              <a href="#">Join Now</a>
            </li>
          </ul>
          <h4>
            <i className="fa fa-align-center" aria-hidden="true"></i> All Pages
          </h4>
          <ul>
            <li>
              <a href="/user/show-all-profiles">All profiles</a>
            </li>
            <li>
              <a href="#">Profile details</a>
            </li>
            <li>
              <a href="#">Wedding</a>
            </li>
            <li>
              <a href="#">Wedding video</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Pricing plans</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign-up</a>
            </li>
            <li>
              <a href="#">Photo gallery</a>
            </li>
            <li>
              <a href="#">Photo gallery 1</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog detail</a>
            </li>
            <li>
              <a href="#">Ask your doubts</a>
            </li>
            <li>
              <a href="#">Make Reservation</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#" target="_blank">
                Coming soon
              </a>
            </li>
            <li>
              <a href="#">404</a>
            </li>
          </ul>
          <div className="menu-pop-help">
            <h4>Support Team</h4>
            <div className="user-pro">
              <img src="images/profiles/1.jpg" alt="" loading="lazy" />
            </div>
            <div className="user-bio">
              <h5>Ashley emyy</h5>
              <span>Senior personal advisor</span>
              <a href="#" className="btn btn-primary btn-sm">
                Ask your doubts
              </a>
            </div>
          </div>
          <div className="menu-pop-soci">
            <ul>
              <li>
                <a href="#!">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="late-news">
            <h4>Latest news</h4>
            <ul>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/1.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="#" className="fclick"></a>
              </li>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/3.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="#" className="fclick"></a>
              </li>
              <li>
                <div className="rel-pro-img">
                  <img src="images/couples/4.jpg" alt="" loading="lazy" />
                </div>
                <div className="rel-pro-con">
                  <h5>Long established fact that a reader distracted</h5>
                  <span className="ic-date">12 Dec 2023</span>
                </div>
                <a href="#" className="fclick"></a>
              </li>
            </ul>
          </div>
          <div className="prof-rhs-help">
            <div className="inn">
              <h3>Tell us your Needs</h3>
              <p>Tell us what kind of service you are looking for.</p>
              <a href="#">Register for free</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mob-me-all dashbord_menu">
        <div className="mob-me-clo">
          <img src="images/icon/close.svg" alt="" />
        </div>
        <div className="mv-bus">
          <div className="head-pro">
            <img src="images/profiles/1.jpg" alt="" loading="lazy" />
            <b>user profile</b>
            <br />
            <h4>Ashley emyy</h4>
          </div>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign-up</a>
            </li>
            <li>
              <a href="#">Pricing plans</a>
            </li>
            <li>
              <a href="/user/show-all-profiles">Browse profiles</a>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className="pg-ser">
          <div className="inn">
            <ul>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/19.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Matrimony Wedding Services</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/14.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>The Ceremony</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/15.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Photography & Video</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/16.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Food Catering</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/17.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Decorations</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/22.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Wedding Halls</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/21.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>Wedding Registry</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="gal-im">
                  <img
                    src="images/couples/20.jpg"
                    className="gal-siz-2"
                    alt=""
                    loading="lazy"
                  />
                  <div className="txt">
                    <span>Wedding Matrimony</span>
                    <h4>The Perfect Cake</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="wed-hom-footer wed-hom-footer-top0">
        <div className="container">
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
                  <a href="#">About company</a>
                </li>
                <li>
                  <a href="#!">Contact us</a>
                </li>
                <li>
                  <a href="#!">Feedback</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
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
              Company name Site - Trusted by over thousands of Boys & Girls for
              successfull marriage.{" "}
              <a href="#" className="btn btn-primary btn-sm">
                Join us today !
              </a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright © <span id="cry">2017-2020</span>{" "}
                <a href="#!" target="_blank">
                  Company.com
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserServicePage;
