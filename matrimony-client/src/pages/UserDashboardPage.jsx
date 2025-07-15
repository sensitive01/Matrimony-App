import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import accountIcon from "../assets/images/profiles/1.jpg";
import planIcon from "../assets/images/icon/plan.png";
import menIcon from "../assets/images/icon/user.png";
import men1 from "../assets/images/profiles/men1.jpg";
import men2 from "../assets/images/profiles/men2.jpg";
import men3 from "../assets/images/profiles/men3.jpg";
import men4 from "../assets/images/profiles/men4.jpg";

import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import UserSideBar from "../components/UserSideBar";
import LayoutComponent from "../components/layouts/LayoutComponent";
import { newProfileMatch } from "../api/axiosService/userAuthService";

const UserDashboardPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [profileMatches, setProfileMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const chartRef = useRef(null);
  const hasInitialized = useRef(false);

  // Function to safely destroy slider
  const destroySlider = () => {
    if (
      sliderRef.current &&
      typeof window.$ !== "undefined" &&
      window.$(sliderRef.current).hasClass("slick-initialized")
    ) {
      try {
        window.$(sliderRef.current).slick("unslick");
      } catch (error) {
        console.warn("Error destroying slider:", error);
      }
    }
  };

  // Function to initialize slider
  const initializeSlider = () => {
    if (
      profileMatches.length > 0 &&
      sliderRef.current &&
      typeof window.$ !== "undefined" &&
      window.$.fn.slick
    ) {
      try {
        // Destroy existing slider first
        destroySlider();

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          if (sliderRef.current) {
            window.$(sliderRef.current).slick({
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
      } catch (error) {
        console.error("Error initializing slider:", error);
      }
    }
  };

  // Function to fetch profile matches
  const fetchProfileMatches = async () => {
    try {
      setLoading(true);
      const response = await newProfileMatch(userId);

      // Assuming the response structure matches your provided data
      if (response.status === 200) {
        setProfileMatches(response.data.matches);
      } else if (Array.isArray(response)) {
        setProfileMatches(response);
      } else {
        setProfileMatches([]);
      }

      setError(null);
    } catch (err) {
      console.error("Error fetching profile matches:", err);
      setError("Failed to load profile matches. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle profile click navigation
  const handleProfileClick = (profileId) => {
    navigate(`/profile-more-details/${profileId}`);
  };

  // Initialize components on first load
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("userDashboardReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("userDashboardReloaded", "true");
      window.location.reload();
      return;
    }

    const initializeComponents = () => {
      // Initialize counter animation
      if (typeof window.$ !== "undefined") {
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

        // Initialize tooltips if available
        if (window.$.fn.tooltip) {
          window.$('[data-bs-toggle="tooltip"]').tooltip();
        }
      }

      // Chart initialization
      if (typeof window.Chart !== "undefined" && !chartRef.current) {
        const chartElement = document.getElementById("Chart_leads");
        if (chartElement) {
          const xValues = ["0"];
          const yValues = [50];

          chartRef.current = new window.Chart(chartElement, {
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
      }

      hasInitialized.current = true;
    };

    if (!hasInitialized.current) {
      const timer = setTimeout(initializeComponents, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Initial fetch and set up interval for periodic updates
  useEffect(() => {
    // Initial fetch
    fetchProfileMatches();

    // Set up interval to fetch new data every 30 seconds
    const interval = setInterval(() => {
      fetchProfileMatches();
    }, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [userId]);

  // Re-initialize slider when profile matches change
  useEffect(() => {
    if (profileMatches.length > 0 && hasInitialized.current) {
      initializeSlider();
    }
  }, [profileMatches]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      destroySlider();
      if (chartRef.current) {
        try {
          chartRef.current.destroy();
        } catch (error) {
          console.warn("Error destroying chart:", error);
        }
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
                    <ul className="slider" ref={sliderRef}>
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
                              <span className="city mr-5">{profile.city}</span>
                              <span className="age ml-5">
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
                            <div
                              className="fclick"
                              onClick={() => handleProfileClick(profile._id)}
                              style={{ cursor: "pointer" }}
                            >
                              &nbsp;
                            </div>
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
                        <img src={planIcon} alt="Plan" />
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
                                <img src={accountIcon} alt="Profile" />
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
