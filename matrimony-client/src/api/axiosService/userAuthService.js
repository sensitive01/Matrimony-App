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