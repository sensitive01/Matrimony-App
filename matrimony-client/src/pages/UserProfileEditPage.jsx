import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import {
  savePersonalInfo,
  getUserInfo,
} from "../api/axiosService/userAuthService";
import { useParams } from "react-router-dom";
import UserSideBar from "../components/UserSideBar";
import BasicInfomation from "./userprofile/BasicInfomation";
import BasicInfoDetails from "./userprofile/BasicInfoDetails";
import JobDetails from "./userprofile/JobDetails";
import AdvancedBioInformation from "./userprofile/AdvancedBioInformation";
import SocialMediaDetails from "./userprofile/SocialMediaDetails";
import HobbiesDetails from "./userprofile/HobbiesDetails";
import LayoutComponent from "../components/layouts/LayoutComponent";

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

          // Map API response fields to form fields with proper case handling
          setFormData({
            name: userData.userName || "",
            email: userData.userEmail || "",
            phone: userData.userMobile || "",
            password: "", // Don't populate password from API for security
            gender: userData.gender || "", // Remove default "Male"
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
            hobbies: Array.isArray(userData.hobbies) ? userData.hobbies : [],
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
    console.log("Clicked");
    console.log("name:", name);
    console.log("value", value);
    const updatedData = { ...formData, [name]: value };
    if (name === "dateOfBirth") {
      updatedData.age = calculateAge(value).toString();
    }
    setFormData(updatedData);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Fixed hobbies change handler
  const handleHobbiesChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    console.log("Clicked hobbies");
    console.log("Selected hobbies:", value);

    setFormData((prev) => ({
      ...prev,
      hobbies: Array.isArray(value) ? value : [],
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
      console.log("Form data before sending:", formData);

      const submitFormData = new FormData();

      // Handle form data properly
      Object.keys(formData).forEach((key) => {
        if (key === "hobbies") {
          // Handle hobbies array properly
          if (Array.isArray(formData[key]) && formData[key].length > 0) {
            formData[key].forEach((hobby, index) => {
              submitFormData.append(`hobbies[${index}]`, hobby);
            });
          } else {
            // Send empty array indicator
            submitFormData.append("hobbies", "");
          }
        } else {
          // Handle all other fields
          const value = formData[key];
          submitFormData.append(key, value || "");
        }
      });

      // Handle profile image
      if (profileImageFile) {
        submitFormData.append("profileImage", profileImageFile);
      }

      // Handle additional images
      if (additionalImageFiles.length > 0) {
        additionalImageFiles.forEach((file, index) => {
          submitFormData.append(`additionalImages`, file);
        });
      }

      // Debug: Log FormData contents
      console.log("FormData contents:");
      for (let [key, value] of submitFormData.entries()) {
        console.log(key, value);
      }

      const response = await savePersonalInfo(submitFormData, userId);

      if (response.status === 200) {
        alert("Profile updated successfully!");
        // Optionally refresh the data
        window.location.reload();
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
      <LayoutComponent />


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
                      <BasicInfomation
                        profileImagePreview={profileImagePreview}
                        handleProfileImageChange={handleProfileImageChange}
                        handleAdditionalImagesChange={
                          handleAdditionalImagesChange
                        }
                        additionalImagePreviews={additionalImagePreviews}
                        removeAdditionalImage={removeAdditionalImage}
                      />

                      <BasicInfoDetails
                        formData={formData}
                        handleInputChange={handleInputChange}
                      />

                      {/* Advanced Bio Section */}
                      <AdvancedBioInformation
                        formData={formData}
                        handleInputChange={handleInputChange}
                      />

                      {/* Job & Education Section */}
                      <JobDetails
                        formData={formData}
                        handleInputChange={handleInputChange}
                      />

                      {/* Social Media Section */}
                      <SocialMediaDetails
                        formData={formData}
                        handleInputChange={handleInputChange}
                      />

                      {/* Hobbies Section */}
                      <HobbiesDetails
                        formData={formData}
                        handleHobbiesChange={handleHobbiesChange}
                      />

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
