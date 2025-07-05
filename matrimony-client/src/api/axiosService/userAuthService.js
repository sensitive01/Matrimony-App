import { userInstance } from "../axiosInstance/userInstance";


export const getUserInfo = async (userId) => {
  const response = await userInstance.get(`/get-user-info/${userId}`);
  return response;
};


export const savePersonalInfo = async (formData,userId) => {
  const response = await userInstance.post(`/complete-profile-data/${userId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const getUserProfile = async (userId) => {
  const response = await userInstance.get(`/get-user-profile/${userId}`);
  return response;
};

export const fetchAllUserProfiles = async (userId) => {
  const response = await userInstance.get(`/get-all-user-profile/${userId}`);
  return response;
};

export const getTheProfieMoreDetails = async (userId) => {
  const response = await userInstance.get(`/get-profile-more-information/${userId}`);
  return response;
};