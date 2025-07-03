import { axiosInstance } from "../axiosInstance/commonInstance";

export const sendSignUpRequest = async (formData) => {
  const response = await axiosInstance.post(`/user/signup`, { formData });
  return response;
};


export const verifyUser = async (formData) => {
  const response = await axiosInstance.post(`/user/verify-login`, { formData });
  return response;
};
