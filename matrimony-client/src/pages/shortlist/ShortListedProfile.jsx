import React, { useEffect, useState } from "react";

import UserSideBar from "../../components/UserSideBar";
import LayoutComponent from "../../components/layouts/LayoutComponent";
import Footer from "../../components/Footer";
import CopyRights from "../../components/CopyRights";
import { getShortListedProfileData } from "../../api/axiosService/userAuthService";
import { useNavigate } from "react-router-dom";

const ShortListedProfile = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle view profile navigation
  const handleViewProfile = (profileId) => {
    navigate(`/profile-more-details/${profileId}`);
  };

  // Fetch shortlisted profiles
  const fetchShortListedProfiles = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await getShortListedProfileData(userId);
      if (response.status === 200) {
        setProfileData(response.data.data);
      } else {
        setError("Failed to fetch shortlisted profiles");
      }
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchShortListedProfiles();
  }, []);

  // Render profile list
  const renderProfileList = () => {
    if (loading) {
      return <div className="text-center">Loading...</div>;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    if (profileData.length === 0) {
      return <div className="text-center">No shortlisted profiles found.</div>;
    }

    return (
      <div className="db-inte-prof-list">
        <ul>
          {profileData.map((profile) => (
            <li key={profile._id}>
              <div className="db-int-pro-1">
                <img
                  src={profile.profileImage || "images/profiles/default.jpg"}
                  alt={profile.userName}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </div>
              <div className="db-int-pro-2">
                <h5>{profile.userName}</h5>
                <ol className="poi">
                  <li>
                    City: <strong>{profile.city}</strong>
                  </li>
                  <li>
                    Age: <strong>{profile.age}</strong>
                  </li>
                  <li>
                    Height: <strong>{profile.height} cm</strong>
                  </li>
                  <li>
                    Education: <strong>{profile.degree}</strong>
                  </li>
                </ol>
                <button
                  onClick={() => handleViewProfile(profile._id)}
                  className="cta-5"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "inherit",
                  }}
                >
                  View full profile
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      <div className="pt-16">
        <div className="db">
          <div className="container">
            <div className="row">
              <UserSideBar />

              <div className="col-md-8 col-lg-9">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Shortlisted Profiles</h2>

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
                        <div className="tab-content">
                          <div className="container tab-pane active">
                            <br />
                            {renderProfileList()}
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
      <Footer />
      <CopyRights />
    </div>
  );
};

export default ShortListedProfile;
