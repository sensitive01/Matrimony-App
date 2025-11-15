import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserSideBar from "../components/UserSideBar";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { getUserProfile } from "../api/axiosService/userAuthService";
import profImage from "../assets/images/blue-circle-with-white-user_78370-4707.avif";
import LayoutComponent from "../components/layouts/LayoutComponent";

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
  }, [userId]);

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      {/* Main Content Area */}
      <div className="pt-16">
        <div className="db">
          <div className="container">
            <div className="row">
              {/* Sidebar - Left Column */}
              <UserSideBar />

              {/* Profile Content - Right Column */}
              <div className="col-md-8 col-lg-9">
                <div className="row">
                  {/* Profile Info Section */}
                  <div className="col-md-12 col-lg-6 col-xl-8 db-sec-com">
                    <h2 className="db-tit">Profile Status</h2>
                    <div
                      className="db-profile"
                      style={{ display: "flex", alignItems: "center", gap: "20px" }}
                    >
                      <div
                        className="img overflow-hidden rounded-full flex items-center justify-center bg-gray-200"
                        style={{
                          width: "160px",
                          height: "160px",
                          minWidth: "160px",
                          minHeight: "160px",
                        }}
                      >
                        {userInfo ? (
                          <img
                            src={userInfo?.profileImage || profImage}
                            loading="lazy"
                            alt="Profile"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              borderRadius: "50%",
                            }}
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full text-gray-400">
                            <i
                              className="fa fa-user"
                              style={{ fontSize: "2rem" }}
                            ></i>
                          </div>
                        )}
                      </div>

                      <div className="profile-info" style={{ flex: 1 }}>
                        <div className="user-details">
                          <h3
                            style={{
                              margin: "0 0 10px 0",
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                            }}
                          >
                            {userInfo?.userName || "John Doe"}
                          </h3>
                          <p
                            style={{
                              margin: "0 0 15px 0",
                              color: "#666",
                              fontSize: "1rem",
                            }}
                          >
                            <i
                              className="fa fa-phone"
                              style={{ marginRight: "8px" }}
                            ></i>
                            {userInfo?.userMobile || "+91 9876543210"}
                          </p>
                        </div>
                        <div className="edit">
                          <Link
                            to={`/user/user-profile-edit-page/${userId}`}
                            className="cta-dark"
                          >
                            Edit profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Statistics Section */}
                  <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                    <h2 className="db-tit">Profile Statistics</h2>
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
                            <Link
                              className="dropdown-item"
                              to={`/user/user-profile-edit-page/${userId}`}
                            >
                              Edit profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/user/user-profile-view/${userId}`}
                            >
                              View profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/user/visibility-settings/${userId}`}
                            >
                              Profile visibility settings
                            </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <CopyRights />
    </div>
  );
};

export default UserProfilePage;