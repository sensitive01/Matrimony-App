import React, { useEffect } from "react";

import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import UserSideBar from "../components/UserSideBar";
import LayoutComponent from "../components/layouts/LayoutComponent";

const UserDashboardPage = () => {
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("userDashboardReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("userDashboardReloaded", "true");
      window.location.reload();
      return;
    }
    const initializeComponents = () => {
      if (typeof window.$ !== "undefined" && window.$.fn.slick) {
        window.$(".slider").slick({
          infinite: false,
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
          ],
        });

        window.$(".count").each(function () {
          window
            .$(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: window.$(this).text(),
              },
              {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                  window.$(this).text(Math.ceil(now));
                },
              }
            );
        });
      }

      // Chart initialization
      if (typeof window.Chart !== "undefined") {
        const xValues = ["0"];
        const yValues = [50];

        new window.Chart("Chart_leads", {
          type: "line",
          data: {
            labels: xValues,
            datasets: [
              {
                fill: false,
                lineTension: 0,
                backgroundColor: "#f1bb51",
                borderColor: "#fae9c8",
                data: yValues,
              },
            ],
          },
          options: {
            responsive: true,
            legend: { display: false },
            scales: {
              yAxes: [{ ticks: { min: 0, max: 100 } }],
            },
          },
        });
      }
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initializeComponents, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup slick slider if it exists
      if (
        typeof window.$ !== "undefined" &&
        window.$(".slider").hasClass("slick-initialized")
      ) {
        window.$(".slider").slick("unslick");
      }
    };
  }, []);

  return (
    <>
       <LayoutComponent />


      <section>
        <div className="db">
          <div className="container">
            <div className="row">
              <UserSideBar />
              <div className="col-md-8 col-lg-9">
                <div className="col-md-12 db-sec-com db-new-pro-main">
                  <h2 className="db-tit">New Profiles Matches</h2>
                  <ul className="slider">
                    {[16, 2, 3, 4, 5, 6, 14].map((profileNum, index) => (
                      <li key={index}>
                        <div className="db-new-pro">
                          <img
                            src={`images/profiles/${profileNum}.jpg`}
                            alt="Profile"
                            className="profile"
                          />
                          <div>
                            <h5>Julia ann</h5>
                            <span className="city">New york</span>
                            <span className="age">22 Years old</span>
                          </div>
                          {(profileNum === 16 ||
                            profileNum === 6 ||
                            profileNum === 14) && (
                            <div
                              className="pro-ave"
                              title="User currently available"
                            >
                              <span className="pro-ave-yes"></span>
                            </div>
                          )}
                          <a
                            href="#"
                            className="fclick"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="row">
                  <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                    <h2 className="db-tit">Profiles status</h2>
                    <div className="db-pro-stat">
                      <h6>Profile completion</h6>
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
                            <a className="dropdown-item" href="#!">
                              Edit profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Profile visibility settings
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="db-pro-pgog">
                        <span>
                          <b className="count">90</b>%
                        </span>
                      </div>
                      <ul className="pro-stat-ic">
                        <li>
                          <span>
                            <i
                              className="fa fa-heart-o like"
                              aria-hidden="true"
                            ></i>
                            <b>12</b>Likes
                          </span>
                        </li>
                        <li>
                          <span>
                            <i
                              className="fa fa-eye view"
                              aria-hidden="true"
                            ></i>
                            <b>12</b>Views
                          </span>
                        </li>
                        <li>
                          <span>
                            <i
                              className="fa fa-handshake-o inte"
                              aria-hidden="true"
                            ></i>
                            <b>12</b>Interests
                          </span>
                        </li>
                        <li>
                          <span>
                            <i
                              className="fa fa-hand-pointer-o clic"
                              aria-hidden="true"
                            ></i>
                            <b>12</b>Clicks
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                    <h2 className="db-tit">Plan details</h2>
                    <div className="db-pro-stat">
                      <h6 className="tit-top-curv">Standard plan</h6>
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
                            <a className="dropdown-item" href="#!">
                              Edit profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Plan change
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Download invoice now
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="db-plan-card">
                        <img src="images/icon/plan.png" alt="Plan" />
                      </div>
                      <div className="db-plan-detil">
                        <ul>
                          <li>
                            Plan name: <strong>Standard</strong>
                          </li>
                          <li>
                            Validity: <strong>6 Months</strong>
                          </li>
                          <li>
                            Valid till <strong>24 June 2024</strong>
                          </li>
                          <li>
                            <a href="#!" className="cta-3">
                              Upgrade now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-4 db-sec-com">
                    <h2 className="db-tit">Recent chat list</h2>
                    <div className="db-pro-stat">
                      <div className="db-inte-prof-list db-inte-prof-chat">
                        <ul>
                          {[2, 16, 13, 14].map((profileNum, index) => (
                            <li key={index}>
                              <div className="db-int-pro-1">
                                <img
                                  src={`images/profiles/${profileNum}.jpg`}
                                  alt="Profile"
                                />
                              </div>
                              <div className="db-int-pro-2">
                                <h5>Julia Ann</h5>
                                <span>Illinois, United States</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

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
                            <a className="dropdown-item" href="#!">
                              Edit profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Plan change
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
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
                              Deny request
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div id="home" className="container tab-pane active">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                {["men1", "men2", "men3", "men4"].map(
                                  (profile, index) => {
                                    const badges = [
                                      "Platinum user",
                                      "Gold user",
                                      "Free user",
                                      "",
                                    ];
                                    const badgeClasses = [
                                      "user-pla-pat",
                                      "user-pla-gold",
                                      "user-pla-free",
                                      "",
                                    ];

                                    return (
                                      <li key={index}>
                                        <div className="db-int-pro-1">
                                          <img
                                            src={`images/profiles/${profile}.jpg`}
                                            alt="Profile"
                                          />
                                          {badges[index] && (
                                            <span
                                              className={`badge bg-primary ${badgeClasses[index]}`}
                                            >
                                              {badges[index]}
                                            </span>
                                          )}
                                        </div>
                                        <div className="db-int-pro-2">
                                          <h5>John Smith</h5>
                                          <ol className="poi">
                                            <li>
                                              City: <strong>Illinois</strong>
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
                                              Request on: 10:30 AM, 18 August
                                              2024
                                            </li>
                                          </ol>
                                          <a
                                            href="#"
                                            className="cta-5"
                                            target="_blank"
                                            rel="noopener noreferrer"
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
                                            Deny
                                          </button>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>

                          <div id="menu1" className="container tab-pane fade">
                            <br />
                            <div className="db-inte-prof-list">
                              <ul>
                                <li>
                                  <div className="db-int-pro-1">
                                    <img
                                      src="images/profiles/men5.jpg"
                                      alt="Profile"
                                    />
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illinois</strong>
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
                                        Accept on: 3:00 PM, 21 August 2024
                                      </li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View full profile
                                    </a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger btn-sm"
                                    >
                                      Deny
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
                                    <img
                                      src="images/profiles/men1.jpg"
                                      alt="Profile"
                                    />
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>
                                        City: <strong>Illinois</strong>
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
                                      <li>Deny on: 3:00 PM, 21 August 2024</li>
                                    </ol>
                                    <a
                                      href="#"
                                      className="cta-5"
                                      target="_blank"
                                      rel="noopener noreferrer"
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

                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Profiles views</h2>
                    <div className="chartin">
                      <canvas id="Chart_leads"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CopyRights />
    </>
  );
};

export default UserDashboardPage;
