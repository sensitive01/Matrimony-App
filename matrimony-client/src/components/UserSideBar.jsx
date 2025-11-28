import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/axiosService/userAuthService";
import profImage from "../assets/images/blue-circle-with-white-user_78370-4707.avif";

const UserSideBar = () => {
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState(null);
  const currentPath = window.location.pathname;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserProfile(userId);
      if (response.status === 200) {
        setUserInfo(response.data.data);
      }
    };
    fetchData();
  }, [userId]);

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
      label: "Short listed Profiles",
    },
    {
      path: "/user/who-viewed-you-page",
      icon: "fa fa-eye",
      label: "Who Viewed You",
    },
    {
      path: "/user/blocked-profiles-page",
      icon: "fa fa-ban",
      label: "Blocked Profiles",
    },
    {
      path: "/user/ignored-profiles-page",
      icon: "fa fa-times-circle",
      label: "Ignored Profiles",
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

  // Styles
  const styles = {
    sidebarCol: {
      paddingLeft: "0",
    },
    sidebarSticky: {
      position: "sticky",
      top: "20px",
    },
    dbNav: {
      background: "#fff",
      border: "1px solid #e9ecef",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
    },
    dbNavPro: {
      width: "100%",
      padding: "20px",
      background: "#fff",
      borderBottom: "1px solid #e9ecef",
    },
    dbNavProImg: {
      width: "100%",
      height: "auto",
      aspectRatio: "1",
      objectFit: "cover",
      borderRadius: "8px",
      border: "2px solid #e9ecef",
    },
    dbNavList: {
      padding: "0",
      background: "#fff",
    },
    ul: {
      listStyle: "none",
      margin: "0",
      padding: "0",
    },
    li: {
      borderBottom: "1px solid #f0f0f0",
    },
    liLast: {
      borderBottom: "none",
    },
    link: {
      display: "flex",
      alignItems: "center",
      padding: "14px 20px",
      color: "#333",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "400",
      transition: "all 0.2s ease",
      position: "relative",
    },
    linkHover: {
      background: "#f8f9fa",
      color: "#667eea",
    },
    linkActive: {
      background: "#667eea",
      color: "#fff",
    },
    linkActiveBefore: {
      content: '""',
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      width: "4px",
      background: "#4c51bf",
    },
    icon: {
      width: "20px",
      marginRight: "12px",
      fontSize: "15px",
      textAlign: "center",
    },
    span: {
      flex: "1",
    },
  };

 return (
  <div className="col-md-4 col-lg-3" style={styles.sidebarCol}>
    <div style={styles.sidebarSticky}>
      <div style={styles.dbNav}>
        
        {/* Profile Image at Top */}
        <div style={styles.dbNavPro}>
          <img
            src={userInfo?.profileImage || profImage}
            style={styles.dbNavProImg}
            alt="Profile"
          />
        </div>

        {/* Navigation Menu */}
        <div style={styles.dbNavList}>
          <ul style={styles.ul}>
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path;
              const isHovered = hoveredIndex === index;
              const isLast = index === navItems.length - 1;

              return (
                <li
                  key={index}
                  style={isLast ? styles.liLast : styles.li}
                >
                  <a
                    href={item.path}
                    style={{
                      ...styles.link,
                      ...(isActive && styles.linkActive),
                      ...(isHovered && !isActive && styles.linkHover),
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {isActive && (
                      <span style={styles.linkActiveBefore}></span>
                    )}

                    <i
                      className={item.icon}
                      aria-hidden="true"
                      style={styles.icon}
                    ></i>

                    <span style={styles.span}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </div>
  </div>
);
};

export default UserSideBar;
