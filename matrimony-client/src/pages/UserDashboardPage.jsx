import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import UserSideBar from "../components/UserSideBar";
import LayoutComponent from "../components/layouts/LayoutComponent";
import { newProfileMatch } from "../api/axiosService/userAuthService";

const UserDashboardPage = () => {
  const userId = localStorage.getItem("userId");
  const [profileMatches, setProfileMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch profile matches
  const fetchProfileMatches = async () => {
    try {
      setLoading(true);
      const response = await newProfileMatch(userId);

      // Assuming the response structure matches your provided data
      if (response.status===200) {
        setProfileMatches(response.data.matches);
      } else if (Array.isArray(response)) {
        setProfileMatches(response);
      } else {
        setProfileMatches([]);
      }

      setError(null);
    } catch (err) {
      console.error("Error fetching profile matches:", err);
      setError("Failed to fetch profile matches");
    } finally {
      setLoading(false);
    }
  };

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
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
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

  // Initial fetch and set up interval for periodic updates
  useEffect(() => {
    // Initial fetch
    fetchProfileMatches();

    // Set up interval to fetch new data every 30 seconds (30000ms)
    // You can adjust this interval as needed
    const interval = setInterval(() => {
      fetchProfileMatches();
    }, 30000); // 30 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [userId]);

  // Re-initialize slider when profile matches change
  useEffect(() => {
    if (profileMatches.length > 0) {
      setTimeout(() => {
        if (typeof window.$ !== "undefined" && window.$.fn.slick) {
          // Destroy existing slider if it exists
          if (window.$(".slider").hasClass("slick-initialized")) {
            window.$(".slider").slick("unslick");
          }

          // Reinitialize slider with new data
          window.$(".slider").slick({
            infinite: false,
            slidesToShow: Math.min(5, profileMatches.length),
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: Math.min(3, profileMatches.length),
                  slidesToScroll: 1,
                  centerMode: false,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: Math.min(2, profileMatches.length),
                  slidesToScroll: 1,
                  centerMode: false,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                },
              },
            ],
          });
        }
      }, 100);
    }
  }, [profileMatches]);

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
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="db-tit">New Profiles Matches</h2>
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {profileMatches.length > 0 ? (
                    <ul className="slider">
                      {profileMatches.map((profile, index) => (
                        <li key={profile._id || index}>
                          <div className="db-new-pro">
                            <img
                              src={
                                profile.profileImage ||
                                "images/profiles/default.jpg"
                              }
                              alt={`${profile.userName}'s Profile`}
                              className="profile"
                              onError={(e) => {
                                e.target.src = "images/profiles/default.jpg";
                              }}
                            />
                            <div>
                              <h5>{profile.userName}</h5>
                              <span className="city">{profile.city}</span>
                              <span className="age">
                                {profile.age} Years old
                              </span>
                            </div>
                            {/* Optional: Add online status indicator */}
                            {index % 3 === 0 && (
                              <div
                                className="pro-ave"
                                title="User currently available"
                              >
                                <span className="pro-ave-yes"></span>
                              </div>
                            )}
                            <a
                              href={`/profile/${profile._id}`}
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
                  ) : (
                    !loading && (
                      <div className="alert alert-info" role="alert">
                        No profile matches found at the moment.
                      </div>
                    )
                  )}
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
