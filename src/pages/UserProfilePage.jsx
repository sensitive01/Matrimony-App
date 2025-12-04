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

  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      {/* Main Content Area */}
      <div className="pt-16">
        <div className="db">
          <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="row" style={{ marginLeft: 45, marginRight: 0 }}>
              {/* Sidebar - Left Column - Pushed further left */}
              <div className="col-md-4 col-lg-3" style={{ paddingLeft: 0, marginLeft: "-10px" }}>
                <UserSideBar />
              </div>

              {/* Profile Content - Right Column */}
              <div className="col-md-8 col-lg-9" style={{ paddingLeft: "20px", paddingRight: "15px" }}>
                <div className="row">
                  {/* Header with Edit Button */}
                  <div className="col-12">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                      <h2 className="db-tit" style={{ margin: 0 }}>My Profile</h2>
                      <Link
                        to={`/user/user-profile-edit-page/${userId}`}
                        className="btn btn-primary"
                        style={{
                          padding: "10px 24px",
                          fontSize: "14px",
                          borderRadius: "5px",
                          textDecoration: "none",
                        }}
                      >
                        <i className="fa fa-edit" style={{ marginRight: "8px" }}></i>
                        Edit Profile
                      </Link>
                    </div>
                  </div>

                  {/* Profile Header Card */}
                  <div className="col-12 mb-4">
                    <div
                      className="db-profile"
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "25px",
                        padding: "25px",
                        background: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                      }}
                    >
                      <div
                        className="img overflow-hidden rounded-full flex items-center justify-center bg-gray-200"
                        style={{
                          width: "130px",
                          height: "130px",
                          minWidth: "130px",
                          minHeight: "130px",
                          border: "5px solid #ff6b35"
                        }}
                      >
                        {userInfo?.profileImage ? (
                          <img
                            src={userInfo.profileImage}
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
                              e.target.src = profImage;
                            }}
                          />
                        ) : (
                          <img
                            src={profImage}
                            loading="lazy"
                            alt="Default Profile"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                      </div>

                      <div className="profile-info" style={{ flex: 1 }}>
                        <div className="user-details">
                          <h3
                            style={{
                              margin: "0 0 15px 0",
                              fontSize: "2rem",
                              fontWeight: "700",
                              color: "#333"
                            }}
                          >
                            {userInfo?.userName || "User Name"}
                          </h3>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <p
                              style={{
                                margin: "0",
                                color: "#666",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                              }}
                            >
                              <i className="fa fa-phone" style={{ color: "#7c3aed", width: "18px" }}></i>
                              <span style={{ fontWeight: "500" }}>{userInfo?.userMobile || "Not provided"}</span>
                            </p>
                            <p
                              style={{
                                margin: "0",
                                color: "#666",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                              }}
                            >
                              <i className="fa fa-envelope" style={{ color: "#7c3aed", width: "18px" }}></i>
                              <span style={{ fontWeight: "500" }}>{userInfo?.userEmail || "Not provided"}</span>
                            </p>
                            <div style={{ marginTop: "5px", display: "flex", gap: "10px", alignItems: "center" }}>
                              <span
                                className={`badge ${
                                  userInfo?.profileStatus === "Approved"
                                    ? "bg-success"
                                    : userInfo?.profileStatus === "Pending"
                                    ? "bg-warning text-dark"
                                    : "bg-secondary"
                                }`}
                                style={{
                                  padding: "8px 16px",
                                  fontSize: "0.9rem",
                                  fontWeight: "600",
                                  borderRadius: "20px"
                                }}
                              >
                                {userInfo?.profileStatus || "Pending"}
                              </span>
                              <span
                                className="badge bg-info"
                                style={{
                                  padding: "8px 16px",
                                  fontSize: "0.9rem",
                                  fontWeight: "600",
                                  borderRadius: "20px"
                                }}
                              >
                                {userInfo?.profileVisibility || "Private"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Me Section */}
                  {userInfo?.aboutMe && (
                    <div className="col-12 mb-4">
                      <div style={{ 
                        padding: "20px", 
                        background: "#fff", 
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                      }}>
                        <h4 style={{ 
                          marginBottom: "15px", 
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#333",
                          borderBottom: "2px solid #7c3aed",
                          paddingBottom: "10px"
                        }}>
                          <i className="fa fa-user-circle" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                          About Me
                        </h4>
                        <p style={{ 
                          color: "#666", 
                          fontSize: "1rem", 
                          lineHeight: "1.6",
                          margin: 0 
                        }}>
                          {userInfo.aboutMe}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Basic Details */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-info-circle" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Basic Details
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Profile Created for:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.profileCreatedFor || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.userName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Age:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>
                            {userInfo?.dateOfBirth 
                              ? `${calculateAge(userInfo.dateOfBirth)} years / ${new Date(userInfo.dateOfBirth).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace(',', '')}`
                              : "Not Specified"}
                          </span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Body Type:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.bodyType || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Physical Status:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.physicalStatus || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Complexion:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.complexion || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Height:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.height || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Weight:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.weight ? `${userInfo.weight} kg` : "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Marital Status:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.maritalStatus || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Married Month & Year:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.marriedMonthYear || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Living Together Period:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.livingTogetherPeriod || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Divorced Month & Year:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.divorcedMonthYear || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Reason for Divorce:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.reasonForDivorce || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Child Status:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.childStatus || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>No. of Children:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.numberOfChildren || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Eating Habits:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.eatingHabits || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Drinking Habits:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.drinkingHabits || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Smoking Habits:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.smokingHabits || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Mother Tongue:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.motherTongue || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Caste:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.caste || "Not Specified"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Family Details */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-users" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Family Details
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Father's Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.fathersName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Mother's Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.mothersName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Father's Occupation:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.fathersOccupation || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Father's Profession:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.fathersProfession || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Mother's Occupation:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.mothersOccupation || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Father's Native:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.fathersNative || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Mother's Native:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.mothersNative || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Family Value:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.familyValue || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Family Type:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.familyType || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Family Status:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.familyStatus || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Residence Type:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.residenceType || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>No. of Brothers:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.numberOfBrothers || "No brothers"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>No. of Sisters:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.numberOfSisters || "No sisters"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Religious Information */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-book" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Religious Information
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Denomination:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.denomination || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Church:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.church || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Church Activity:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.churchActivity || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Pastor's Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.pastorsName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Spirituality:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.spirituality || "Not Specified"}</span>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                          <span style={{ color: "#666", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                            Religious Detail:
                          </span>
                          <div style={{ 
                            padding: "12px", 
                            background: "#f9fafb", 
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            minHeight: "60px",
                            color: "#333",
                            fontWeight: "500",
                            lineHeight: "1.6"
                          }}>
                            {userInfo?.religiousDetail || "Not Specified"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-phone" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Contact Information
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Mobile Number:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.userMobile || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Alternate Mobile Number:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.alternateMobile || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Email:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.userEmail || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Landline Number:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.landlineNumber || "Not Specified"}</span>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                          <span style={{ color: "#666", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                            Current Address:
                          </span>
                          <div style={{ 
                            padding: "12px", 
                            background: "#f9fafb", 
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            minHeight: "60px",
                            color: "#333",
                            fontWeight: "500",
                            lineHeight: "1.6"
                          }}>
                            {userInfo?.currentAddress || "Not Specified"}
                          </div>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                          <span style={{ color: "#666", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                            Permanent Address:
                          </span>
                          <div style={{ 
                            padding: "12px", 
                            background: "#f9fafb", 
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            minHeight: "60px",
                            color: "#333",
                            fontWeight: "500",
                            lineHeight: "1.6"
                          }}>
                            {userInfo?.permanentAddress || "Not Specified"}
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Contact Person Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.contactPersonName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Relationship:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.relationship || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Citizen Of:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.citizenOf || "Not Specified"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Information - moved after Contact */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-map-marker" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Location
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>City:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.city || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>State:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.state || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Pincode:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.pincode || "Not Specified"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information - Education Section */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-graduation-cap" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Professional Information
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Education:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.education || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Additional Education:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.additionalEducation || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>College:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.college || "Not Specified"}</span>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                          <span style={{ color: "#666", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                            Education in detail:
                          </span>
                          <div style={{ 
                            padding: "12px", 
                            background: "#f9fafb", 
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            minHeight: "60px",
                            color: "#333",
                            fontWeight: "500",
                            lineHeight: "1.6"
                          }}>
                            {userInfo?.educationDetail || "Not Specified"}
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Employment Type:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.employmentType || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Occupation:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.occupation || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Position:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.position || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Company Name:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.companyName || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Annual Income:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>
                            {userInfo?.annualIncome || (userInfo?.salary ? `₹${userInfo.salary}` : "Not Specified")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lifestyle */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-heart" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        LifeStyle
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div>
                          <span style={{ color: "#666", fontWeight: "500", display: "block", marginBottom: "8px" }}>
                            Hobbies:
                          </span>
                          {userInfo?.hobbies && userInfo.hobbies.length > 0 ? (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                              {userInfo.hobbies.map((hobby, index) => (
                                <span
                                  key={index}
                                  style={{
                                    padding: "6px 14px",
                                    background: "#f0f0f0",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    color: "#555",
                                    fontWeight: "500"
                                  }}
                                >
                                  {hobby}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span style={{ color: "#333", fontWeight: "500" }}>Not Specified</span>
                          )}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Interests:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.interests || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Music:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.music || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Favourite Reads:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.favouriteReads || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Favourite Cuisines:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.favouriteCuisines || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Sports Activities:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.sportsActivities || "Not Specified"}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>Dress Styles:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.dressStyles || "Not Specified"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partner Preferences */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-heart-o" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Partner Preference
                      </h4>
                      
                      {/* Basic & Religion Preferences */}
                      <div style={{ marginBottom: "20px" }}>
                        <h5 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#555", marginBottom: "12px" }}>
                          Basic & Religion Preferences
                        </h5>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Bride's Age:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>
                              {userInfo?.partnerAgeFrom || userInfo?.partnerAgeTo ? 
                                `${userInfo.partnerAgeFrom || 'Any'} - ${userInfo.partnerAgeTo || 'Any'}` : 
                                'Any'}
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Height:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerHeight || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Marital Status:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerMaritalStatus || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Mother Tongue:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerMotherTongue || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Caste:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerCaste || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Physical Status:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerPhysicalStatus || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Eating Habits:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerEatingHabits || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Drinking Habits:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerDrinkingHabits || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Smoking Habits:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerSmokingHabits || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Denomination:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerDenomination || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Spirituality:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerSpirituality || "Not Specified"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Professional Preferences */}
                      <div style={{ marginBottom: "20px" }}>
                        <h5 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#555", marginBottom: "12px" }}>
                          Professional Preferences
                        </h5>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Education:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerEducation || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Employment Type:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerEmploymentType || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Occupation:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerOccupation || "Not Specified"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Annual Income:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerAnnualIncome || "Not Specified"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Location Preferences */}
                      <div>
                        <h5 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#555", marginBottom: "12px" }}>
                          Location Preferences
                        </h5>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Country:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerCountry || "Any"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>State:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerState || "Any"}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#666", fontWeight: "500" }}>Residing District:</span>
                            <span style={{ color: "#333", fontWeight: "600" }}>{userInfo?.partnerDistrict || "Any"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="col-12 mb-4">
                    <div style={{ 
                      padding: "20px", 
                      background: "#fff", 
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                    }}>
                      <h4 style={{ 
                        marginBottom: "20px", 
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        color: "#333",
                        borderBottom: "2px solid #7c3aed",
                        paddingBottom: "10px"
                      }}>
                        <i className="fa fa-share-alt" style={{ marginRight: "10px", color: "#7c3aed" }}></i>
                        Social Media
                      </h4>
                      <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: "15px",
                        justifyContent: "center"
                      }}>
                        {userInfo?.facebook && (
                          <a
                            href={userInfo.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "#1877f2",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-facebook"></i>
                            Facebook
                          </a>
                        )}
                        {userInfo?.instagram && (
                          <a
                            href={userInfo.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-instagram"></i>
                            Instagram
                          </a>
                        )}
                        {userInfo?.linkedin && (
                          <a
                            href={userInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "#0077b5",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-linkedin"></i>
                            LinkedIn
                          </a>
                        )}
                        {userInfo?.whatsapp && (
                          <a
                            href={userInfo.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "#25D366",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-whatsapp"></i>
                            WhatsApp
                          </a>
                        )}
                        {userInfo?.x && (
                          <a
                            href={userInfo.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "#000",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-twitter"></i>
                            X (Twitter)
                          </a>
                        )}
                        {userInfo?.youtube && (
                          <a
                            href={userInfo.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 20px",
                              background: "#FF0000",
                              color: "#fff",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "500",
                              fontSize: "0.95rem"
                            }}
                          >
                            <i className="fa fa-youtube-play"></i>
                            YouTube
                          </a>
                        )}
                      </div>
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