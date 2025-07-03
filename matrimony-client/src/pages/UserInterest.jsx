import React from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";
import UserSideBar from "../components/UserSideBar";

const UserInterest = () => {
  return (
    <>
      {/* <PreLoader /> */}
      <PopUpSearch />
      <TopMenu />
      <MenuPopUp1 />
      <MenuPopUp2 />
      <MainMenuBar />
      <ExploreMenuPopUp />
      <MobileUserProfileMenu />

      <section>
        <div className="db">
          <div className="container">
            <div className="row">
              <UserSideBar />

              <div className="col-md-8 col-lg-9">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Interest request</h2>
                    <div className="db-pro-stat">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="dropdown"
                        >
                          <i
                            className="fa fa-ellipsis-h"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Edid profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Plan change
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Download invoice now
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="db-inte-main">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#home"
                            >
                              New requests
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#menu1"
                            >
                              Accept request
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#menu2"
                            >
                              Denay request
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div id="home" className="container tab-pane active">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men1.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-pat">
                                      Platinum user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men2.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-gold">
                                      Gold user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men3.jpg"
                                      alt=""
                                    />{" "}
                                    <span className="badge bg-primary user-pla-free">
                                      Free user
                                    </span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men4.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="menu1" className="container tab-pane fade">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men5.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                      <li>
                                        Accept on: 3:000 PM, 21 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Denay
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="menu2" className="container tab-pane fade">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    {" "}
                                    <img
                                      src="images/profiles/men1.jpg"
                                      alt=""
                                    />{" "}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illunois</strong>
                                      </li>
                                      <li>
                                        Age: <strong>21</strong>
                                      </li>
                                      <li>
                                        Height: <strong>5.7</strong>
                                      </li>
                                      <li>
                                        Job: <strong>Working</strong>
                                      </li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>
                                        Request on: 10:30 AM, 18 August 2024
                                      </li>
                                      <li>
                                        Denay on: 3:000 PM, 21 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm"
                                    >
                                      Accept
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span>Free support:</span> +92 (8800) 68 - 8960
              &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span>
              info@example.com
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

export default UserInterest;
