import React, { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";
import UserSideBar from "../components/UserSideBar";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { getUserProfile } from "../api/axiosService/userAuthService";

const UserProfilePage = () => {
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserProfile(userId);
      if (response.status === 200) {
        setUserInfo(response.data.data);
      }
    };
    fetchData();
  }, []);

 // Fixed Chart.js v3+ configuration
useEffect(() => {
  const initChart = () => {
    if (window.Chart && document.getElementById("Chart_leads")) {
      const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      const yValues = [10, 20, 30, 40, 50, 60];

      new window.Chart("Chart_leads", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              fill: false,
              tension: 0, // Changed from lineTension to tension
              backgroundColor: "#f1bb51",
              borderColor: "#fae9c8",
              data: yValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { 
              display: false 
            }
          },
          scales: {
            y: { // Changed from yAxes to y
              min: 0, // Changed from ticks.min to min
              max: 100 // Changed from ticks.max to max
            }
          },
        },
      });
    }
  };

  // Load Chart.js if not already loaded
  if (!window.Chart) {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js";
    script.onload = initChart;
    document.head.appendChild(script);
  } else {
    initChart();
  }
}, []);

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
                  <div className="col-md-12 col-lg-6 col-xl-8 db-sec-com">
                    <h2 className="db-tit">Profiles status</h2>
                    <div className="db-profile" style={{ display: 'flex', alignItems: 'center' }}>
                      <div 
                        className="img overflow-hidden rounded-full flex items-center justify-center bg-gray-200"
                        style={{
                          width: '160px',
                          height: '160px',
                          minWidth: '160px',
                          minHeight: '160px'
                        }}
                      >
                        {userInfo ? (
                          <img
                            src={userInfo?.profileImage}
                            loading="lazy"
                            alt="Profile"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              borderRadius: '50%'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full text-gray-400">
                            <i className="fa fa-user" style={{ fontSize: '2rem' }}></i>
                          </div>
                        )}
                      </div>

                      <div className="profile-info" style={{ marginLeft: '20px', flex: 1 }}>
                        <div className="user-details">
                          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {userInfo?.userName || 'John Doe'}
                          </h3>
                          <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '1rem' }}>
                            <i className="fa fa-phone" style={{ marginRight: '8px' }}></i>
                            {userInfo?.userMobile || '+91 9876543210'}
                          </p>
                        </div>
                        <div className="edit">
                          <a
                            href={`/user/user-profile-edit-page/${userId}`}
                            className="cta-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Edit profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            <a className="dropdown-item" href="#">
                              Edit profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              View profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
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
                </div>
                <div className="row">
                  <div className="col-md-12 db-sec-com db-pro-stat-pg">
                    <h2 className="db-tit">Profiles views</h2>
                    <div className="db-pro-stat-view-filter cho-round-cor chosenini">
                      <div>
                        <select className="chosen-select">
                          <option value="">Current month</option>
                          <option value="">Jan 2024</option>
                          <option value="">Feb 2024</option>
                          <option value="">Mar 2024</option>
                          <option value="">Apr 2024</option>
                          <option value="">May 2024</option>
                          <option value="">Jun 2024</option>
                        </select>
                      </div>
                    </div>
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

export default UserProfilePage;