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

  return (
    <div className="hom-top">
      <div className="container">
        <div className="row">
          <div className="hom-nav">
            {/* LOGO */}
            <div className="logo">
              <span className="menu desk-menu">
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

                {/* <li className="smenu-pare">
                  <span className="smenu">All pages</span>
                  <div className="smenu-open smenu-multi">
                    <div className="container">
                      <div className="row">
                        {[1, 2, 3, 4].map((set, index) => (
                          <div className="multi-col" key={index}>
                            <div className="inn">
                              <h4>{`Page sets ${set}`}</h4>
                              <ul>
                                {set === 1 && (
                                  <>
                                    <li>
                                      <Link to="/user/show-all-profiles/all-profiles">
                                        Browse Profiles
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/profile-more-details">
                                        Profile Details
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/user/user-wedding-page">Wedding</Link>
                                    </li>
                                    <li>
                                      <Link to="/user/user-service-page">Services</Link>
                                    </li>
                                    <li>
                                      <Link to="/photo-gallery">
                                        Photo Gallery
                                      </Link>
                                    </li>
                                  </>
                                )}
                                {set === 2 && (
                                  <>
                                    <li>
                                      <Link to="/plans">Plans</Link>
                                    </li>
                                    <li>
                                      <Link to="/user/user-login">Login</Link>
                                    </li>
                                    <li>
                                      <Link to="/user/user-sign-up">
                                        Sign Up
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/photo-gallery">
                                        Photo Gallery
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/photo-gallery-1">
                                        Photo Gallery 1
                                      </Link>
                                    </li>
                                  </>
                                )}
                                {set === 3 && (
                                  <>
                                    <li>
                                      <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                      <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog-detail">Blog Detail</Link>
                                    </li>
                                  </>
                                )}
                                {set === 4 && (
                                  <>
                                    <li>
                                      <Link to="/enquiry">Enquiry</Link>
                                    </li>
                                    <li>
                                      <Link to="/make-reservation">
                                        Make Reservation
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                      <Link to="/coming-soon">Coming Soon</Link>
                                    </li>
                                    <li>
                                      <Link to="/404">404</Link>
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        ))}

                        <div className="multi-col full">
                          <div className="inn">
                            <h4>User dashboard pages</h4>
                            <ul>
                              <li>
                                <Link to="/user/dashboard">User Dashboard</Link>
                              </li>
                              <li>
                                <Link to="/user/profile">User Profile</Link>
                              </li>
                              <li>
                                <Link to="/user/interests">User Interests</Link>
                              </li>
                              <li>
                                <Link to="/user/chat">User Chat</Link>
                              </li>
                              <li>
                                <Link to="/user/plan">User Plan</Link>
                              </li>
                              <li>
                                <Link to="/user/settings">User Settings</Link>
                              </li>
                              <li>
                                <Link to="/user/profile-edit">
                                  User Profile Edit
                                </Link>
                              </li>
                              <li>
                                <Link to="/user/user-login">Login</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> */}

                {/* <li className="smenu-pare">
                  <span className="smenu">Top pages</span>
                  <div className="smenu-open smenu-single">
                    <ul>
                      <li>
                        <Link to="/user/show-all-profiles/all-profiles">
                          Browse Profiles
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile-more-details">Profile Details</Link>
                      </li>
                      <li>
                        <Link to="/user/user-wedding-page">Wedding</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail">Blog Detail</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/photo-gallery">Photo Gallery</Link>
                      </li>
                      <li>
                        <Link to="/photo-gallery-1">Photo Gallery 1</Link>
                      </li>
                      <li>
                        <Link to="/user/user-login">Login</Link>
                      </li>
                      <li>
                        <Link to="/user/user-sign-up">Sign Up</Link>
                      </li>
                      <li>
                        <Link to="/plans">Plans</Link>
                      </li>
                    </ul>
                  </div>
                </li> */}
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
