import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/axiosService/userAuthService";
import profImage from "../assets/images/blue-circle-with-white-user_78370-4707.avif";

const UserSideBar = () => {
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState(null);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserProfile(userId);
      if (response.status === 200) {
        setUserInfo(response.data.data);
      }
    };
    fetchData();
  }, []);

  const navItems = [
    {
      path: "/user/user-dashboard-page",
      icon: "fa fa-tachometer",
      label: "Dashboard",
    },
    {
      path: "/user/user-profile-page",
      icon: "fa fa-male",
      label: "Profile",
    },
    {
      path: "/user/user-interest-page",
      icon: "fa fa-handshake-o",
      label: "Interests",
    },
    {
      path: "/user/user-chat-page",
      icon: "fa fa-commenting-o",
      label: "Chat list",
    },
    {
      path: "/user/short-listed-profiles-page",
      icon: "fa fa-bookmark",
      label: "Short lIsted Profiles",
    },
    {
      path: "/user/user-plan-page",
      icon: "fa fa-money",
      label: "Plan",
    },
    {
      path: "/user/user-settings-page",
      icon: "fa fa-cog",
      label: "Setting",
    },
    {
      path: "/user/user-login",
      icon: "fa fa-sign-out",
      label: "Log out",
    },
  ];

  return (
    <div className="col-md-4 col-lg-3">
      <div className="db-nav">
        <div className="db-nav-pro">
          <img
            src={userInfo?.profileImage || profImage}
            className="img-fluid"
            alt="Profile"
          />
        </div>
        <div className="db-nav-list">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={currentPath === item.path ? "act" : ""}
                >
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
