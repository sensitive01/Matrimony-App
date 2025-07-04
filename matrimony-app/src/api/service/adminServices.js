import { adminInstance } from "../axiosInstance";

export const registerAdmin = async () => {
  const response = await adminInstance.get(`/`);
  return response;
};

export const verifyAdmin = async (loginData) => {
  const response = await adminInstance.post(`/verify-admin`,{loginData});
  return response;
};

export const getAllUserData = async () => {
  const response = await adminInstance.get(`/get-all-users`);
  return response;
};

