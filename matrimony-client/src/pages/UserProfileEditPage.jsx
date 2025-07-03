import React, { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import {
  savePersonalInfo,
  getUserInfo,
} from "../api/axiosService/userAuthService";
import { useParams } from "react-router-dom";
import UserSideBar from "../components/UserSideBar";

const UserProfileEditPage = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
    dateOfBirth: "",
    age: "",
    height: "",
    weight: "",
    fathersName: "",
    mothersName: "",
    address: "",
    jobType: "",
    companyName: "",
    salary: "",
    jobExperience: "",
    degree: "",
    school: "",
    college: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
    x: "",
    youtube: "",
    linkedin: "",
    hobbies: [],
  });

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState([]);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserInfo(userId);
        if (response.status === 200) {
          const userData = response.data.data;

          // Map API response fields to form fields
          setFormData({
            name: userData.userName || "",
            email: userData.userEmail || "",
            phone: userData.userMobile || "",
            password: "", // Don't populate password from API for security
            gender: userData.gender || "",
            city: userData.city || "",
            dateOfBirth: userData.dateOfBirth
              ? userData.dateOfBirth.split("T")[0]
              : "", // Format date for input
            age: userData.age ? userData.age.toString() : "", // Convert to string
            height: userData.height || "",
            weight: userData.weight || "",
            fathersName: userData.fathersName || "",
            mothersName: userData.mothersName || "",
            address: userData.address || "",
            jobType: userData.jobType || "",
            companyName: userData.companyName || "",
            salary: userData.salary || "",
            jobExperience: userData.jobExperience || "",
            degree: userData.degree || "",
            school: userData.school || "",
            college: userData.college || "",
            whatsapp: userData.whatsapp || "",
            facebook: userData.facebook || "",
            instagram: userData.instagram || "",
            x: userData.x || "",
            youtube: userData.youtube || "",
            linkedin: userData.linkedin || "",
            hobbies: userData.hobbies || [],
          });

          // Set profile image if exists
          if (userData.profileImage) {
            setProfileImagePreview(userData.profileImage);
          }

          // Set additional images if they exist
          if (
            userData.additionalImages &&
            userData.additionalImages.length > 0
          ) {
            setAdditionalImagePreviews(
              userData.additionalImages.map((url) => ({
                url,
                isExisting: true,
              }))
            );
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error loading user data. Please try again.");
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHobbiesChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({
      ...prev,
      hobbies: selectedOptions,
    }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setAdditionalImageFiles((prev) => [...prev, ...files]);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAdditionalImagePreviews((prev) => [
            ...prev,
            {
              url: reader.result,
              file: file,
              isExisting: false,
            },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeAdditionalImage = (index) => {
    const imageToRemove = additionalImagePreviews[index];

    setAdditionalImagePreviews((prev) => prev.filter((_, i) => i !== index));

    if (!imageToRemove.isExisting && imageToRemove.file) {
      setAdditionalImageFiles((prev) =>
        prev.filter((file) => file !== imageToRemove.file)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Debug: Log form data before sending
      console.log("Form data before sending:", formData);

      const submitFormData = new FormData();

      // FIXED: Improved FormData handling
      Object.keys(formData).forEach((key) => {
        if (key === "hobbies") {
          // Handle hobbies array properly
          if (Array.isArray(formData[key]) && formData[key].length > 0) {
            formData[key].forEach((hobby) => {
              submitFormData.append("hobbies[]", hobby);
            });
          }
        } else {
          // Append all values including empty strings (backend might need them)
          submitFormData.append(key, formData[key] || "");
        }
      });

      if (profileImageFile) {
        submitFormData.append("profileImage", profileImageFile);
      }

      additionalImageFiles.forEach((file) => {
        submitFormData.append(`additionalImages`, file);
      });

      // Debug: Log FormData contents
      console.log("FormData contents:");
      for (let [key, value] of submitFormData.entries()) {
        console.log(key, value);
      }

      const response = await savePersonalInfo(submitFormData, userId);

      if (response.success) {
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile. Please try again.");
      }
    } catch (error) {
      alert("Error updating profile. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PreLoader />
      <PopUpSearch />
      <TopMenu />
      <MenuPopUp1 />
      <MenuPopUp2 />
      <MainMenuBar />
      <ExploreMenuPopUp />
      <MobileUserProfileMenu />

      <section>
        <div className="login pro-edit-update">
          <div className="container">
            <div className="row">
              <UserSideBar />

              <div className="inn">
                <div className="rhs">
                  <div className="form-login">
                    <form onSubmit={handleSubmit}>
                      {/* Profile Image Upload Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Profile</h4>
                          <h1>Upload Images</h1>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="profile-image-upload">
                              <label className="lb">Profile Picture:</label>
                              <div
                                className="profile-image-container"
                                style={{
                                  position: "relative",
                                  width: "150px",
                                  height: "150px",
                                  margin: "10px 0",
                                }}
                              >
                                <div
                                  className="profile-image-circle"
                                  style={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    border: "2px dashed #ccc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    backgroundImage: profileImagePreview
                                      ? `url(${profileImagePreview})`
                                      : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: "relative",
                                  }}
                                  onClick={() =>
                                    document
                                      .getElementById("profile-image-input")
                                      .click()
                                  }
                                >
                                  {!profileImagePreview && (
                                    <div
                                      style={{
                                        textAlign: "center",
                                        color: "#666",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontSize: "24px",
                                          marginBottom: "5px",
                                        }}
                                      >
                                        +
                                      </div>
                                      <div style={{ fontSize: "12px" }}>
                                        Upload Photo
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <input
                                  id="profile-image-input"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleProfileImageChange}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="additional-images-upload">
                              <label className="lb">Additional Images:</label>
                              <div className="form-group">
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  onChange={handleAdditionalImagesChange}
                                  className="form-control"
                                />
                              </div>
                              {additionalImagePreviews.length > 0 && (
                                <div
                                  className="additional-images-preview"
                                  style={{ marginTop: "10px" }}
                                >
                                  <div className="row">
                                    {additionalImagePreviews.map(
                                      (image, index) => (
                                        <div
                                          key={index}
                                          className="col-md-4"
                                          style={{ marginBottom: "10px" }}
                                        >
                                          <div style={{ position: "relative" }}>
                                            <img
                                              src={image.url}
                                              alt={`Additional ${index + 1}`}
                                              style={{
                                                width: "100%",
                                                height: "80px",
                                                objectFit: "cover",
                                                borderRadius: "5px",
                                              }}
                                            />
                                            <button
                                              type="button"
                                              onClick={() =>
                                                removeAdditionalImage(index)
                                              }
                                              style={{
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px",
                                                background: "red",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: "20px",
                                                height: "20px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                              }}
                                            >
                                              ×
                                            </button>
                                            {image.isExisting && (
                                              <div
                                                style={{
                                                  position: "absolute",
                                                  bottom: "5px",
                                                  left: "5px",
                                                  background:
                                                    "rgba(0, 0, 0, 0.7)",
                                                  color: "white",
                                                  padding: "2px 6px",
                                                  borderRadius: "3px",
                                                  fontSize: "10px",
                                                }}
                                              >
                                                Existing
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Basic Info Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic info</h4>
                          <h1>Edit my profile</h1>
                        </div>
                        <div className="form-group">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled
                          />
                        </div>
                        <div className="form-group">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Advanced Bio Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Basic info</h4>
                          <h1>Advanced bio</h1>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Gender:</label>
                            <select
                              className="form-select chosen-select"
                              name="gender"
                              value={formData.gender}
                              onChange={handleInputChange}
                            >
                              <option value="">Select your Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">City:</label>
                            <select
                              className="form-select chosen-select"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                            >
                              <option value="">Select your City</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Newyork">Newyork</option>
                              <option value="London">London</option>
                              <option value="Chicago">Chicago</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Date of birth:</label>
                            <input
                              type="date"
                              className="form-control"
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Age:</label>
                            <input
                              type="number"
                              className="form-control"
                              name="age"
                              value={formData.age}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Height:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="height"
                              value={formData.height}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Weight:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="weight"
                              value={formData.weight}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Fathers name:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fathersName"
                              value={formData.fathersName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Mothers name:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="mothersName"
                              value={formData.mothersName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Address:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Job & Education Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Job details</h4>
                          <h1>Job & Education</h1>
                        </div>
                        <div className="form-group">
                          <label className="lb">Job type:</label>
                          <select
                            className="form-select chosen-select"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Job Type</option>
                            <option value="Business">Business</option>
                            <option value="Employee">Employee</option>
                            <option value="Government">Government</option>
                            <option value="Jobless">Jobless</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Company name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Salary:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="salary"
                              value={formData.salary}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Job total experience:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="jobExperience"
                              value={formData.jobExperience}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Degree:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="degree"
                            value={formData.degree}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">School:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="school"
                              value={formData.school}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">College:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="college"
                              value={formData.college}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Social Media Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>Media</h4>
                          <h1>Social media</h1>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">WhatsApp:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="whatsapp"
                              value={formData.whatsapp}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Facebook:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="facebook"
                              value={formData.facebook}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Instagram:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="instagram"
                              value={formData.instagram}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">X:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="x"
                              value={formData.x}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label className="lb">Youtube:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="youtube"
                              value={formData.youtube}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label className="lb">Linkedin:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hobbies Section */}
                      <div className="edit-pro-parti">
                        <div className="form-tit">
                          <h4>interests</h4>
                          <h1>Hobbies</h1>
                        </div>
                        <div className="chosenini">
                          <div className="form-group">
                            <select
                              className="chosen-select"
                              name="hobbies"
                              value={formData.hobbies}
                              onChange={handleHobbiesChange}
                              multiple
                            >
                              <option value="">Select your Hobbies</option>
                              <option value="Modelling">Modelling</option>
                              <option value="Watching">Watching</option>
                              <option value="movies">movies</option>
                              <option value="Playing">Playing</option>
                              <option value="volleyball">volleyball</option>
                              <option value="Hangout with family">
                                Hangout with family
                              </option>
                              <option value="Adventure travel">
                                Adventure travel
                              </option>
                              <option value="Books reading">
                                Books reading
                              </option>
                              <option value="Music">Music</option>
                              <option value="Cooking">Cooking</option>
                              <option value="Yoga">Yoga</option>
                            </select>
                          </div>
                        </div>
                        {/* Display selected hobbies */}
                        {formData.hobbies.length > 0 && (
                          <div
                            className="selected-hobbies"
                            style={{ marginTop: "10px" }}
                          >
                            <label className="lb">Selected Hobbies:</label>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "5px",
                              }}
                            >
                              {formData.hobbies.map((hobby, index) => (
                                <span
                                  key={index}
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    padding: "2px 8px",
                                    borderRadius: "12px",
                                    fontSize: "12px",
                                  }}
                                >
                                  {hobby}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </form>
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

export default UserProfileEditPage;
