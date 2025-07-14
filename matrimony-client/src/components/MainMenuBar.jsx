import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ✅ Importing image assets
import logoImg from "../assets/images/agapevows - logo.webp";
import profImg1 from "../assets/images/profiles/1.jpg";
import searchImg from "../assets/images/icon/search.svg";
import userImg from "../assets/images/icon/users.svg";
import menuImg from "../assets/images/icon/menu.svg";

const MainMenuBar = () => {
  const [isUserActive, setIsUserActive] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsUserActive(!userId);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // ✅ Inline CSS for hover background effect
  const style = `
    .menu-purple {
      background-color: #A020F0;
      transition: background-color 0.3s ease;
    }
    .menu-purple:hover {
      background-color: #A020F0;
    }
  `;

  return (
    <div className="hom-top">
      {/* Inject the style block for hover effect */}
      <style>{style}</style>

      <div className="container">
        <div className="row">
          <div className="hom-nav">
            {/* LOGO */}
            <div className="logo">
              <span className="menu desk-menu menu-purple">
                <i />
                <i />
                <i />
              </span>
              <Link to="/" className="logo-brand">
                <img
                  src={logoImg}
                  alt="Logo"
                  loading="lazy"
                  className="ic-logo"
                />
              </Link>
            </div>

            {/* MENU START */}
            <div className="bl">
              <ul>
                <li className="smenu-pare">
                  <span className="smenu">Explore</span>
                  <div className="smenu-open smenu-box">
                    <div className="container">
                      <div className="row">
                        <h4 className="tit">Explore categorys</h4>
                        <ul>
                          <li>
                            <div className="menu-box menu-box-2">
                              <h5>
                                Browse profiles{" "}
                                <span>1200+ Verified profiles</span>
                              </h5>
                              <span className="explor-cta">More details</span>
                              <Link
                                to="/user/show-all-profiles/all-profiles"
                                className="fclick"
                              ></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-1">
                              <h5>
                                Wedding page <span>Make reservation</span>
                              </h5>
                              <span className="explor-cta">More details</span>
                              <Link
                                to="/user/user-wedding-page"
                                className="fclick"
                              ></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-3">
                              <h5>
                                All Services <span>Lorem ipsum dummy</span>
                              </h5>
                              <span className="explor-cta">More details</span>
                              <Link
                                to="/user/user-service-page"
                                className="fclick"
                              ></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-4">
                              <h5>
                                Join Now <span>Lorem ipsum dummy</span>
                              </h5>
                              <span className="explor-cta">More details</span>
                              <Link
                                to="/user/user-sign-up"
                                className="fclick"
                              ></Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link to="/plans">Plans</Link>
                </li>
                {isUserActive && (
                  <>
                    <li>
                      <Link to="/user/user-sign-up">Register</Link>
                    </li>
                    <li>
                      <Link to="/user/user-login">Login</Link>
                    </li>
                  </>
                )}

                {!isUserActive && (
                  <li className="smenu-pare">
                    <span className="smenu">Dashboard</span>
                    <div className="smenu-open smenu-single">
                      <ul>
                        <li>
                          <Link to="/user/user-dashboard-page">
                            User Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="/user/show-all-profiles/all-profile">
                            User Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/user/user-chat-page">User Chat</Link>
                        </li>
                        <li>
                          <Link to="/user/user-plan-page">User Plan</Link>
                        </li>
                        <li>
                          <Link to="/user/user-settings-page">
                            User Settings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
                {!isUserActive && (
                  <li>
                    <Link to="#" onClick={handleLogOut}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* USER PROFILE */}
            <div className="al">
              <div className="head-pro">
                <img src={profImg1} alt="Profile" loading="lazy" />
                <b>Advisor</b>
                <br />
                <h4>Ashley emyy</h4>
                <span className="fclick"></span>
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="mob-menu">
              <div className="mob-me-ic">
                <span className="ser-open mobile-ser">
                  <img src={searchImg} alt="Search" />
                </span>
                <span className="mobile-exprt" data-mob="dashbord">
                  <img src={userImg} alt="User" />
                </span>
                <span className="mobile-menu" data-mob="mobile">
                  <img src={menuImg} alt="Menu" />
                </span>
              </div>
            </div>
            {/* END MOBILE MENU */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenuBar;
