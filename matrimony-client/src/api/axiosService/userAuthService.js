import { userInstance } from "../axiosInstance/userInstance";

export const getUserInfo = async (userId) => {
  const response = await userInstance.get(`/get-user-info/${userId}`);
  return response;
};

export const savePersonalInfo = async (formData, userId) => {
  const response = await userInstance.post(
    `/complete-profile-data/${userId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
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
export const fetchAllUserProfilesHome = async () => {
  const response = await userInstance.get(`/get-all-user-profile-home`);
  return response;
};

export const getTheProfieMoreDetails = async (userId) => {
  const response = await userInstance.get(
    `/get-profile-more-information/${userId}`
  );
  return response;
};

export const sendInterestData = async (interestData, userId) => {
  const response = await userInstance.post(`/show-user-interests/${userId}`, {
    interestData,
  });
  return response;
};

export const getInterestedProfile = async (userId, reqStatus) => {
  const response = await userInstance.post(
    `/get-interested-profile-request/${userId}`,
    { reqStatus }
  );
  return response;
};

export const handleChangeInterestStatus = async (
  userId,
  profileId,
  reqStatus
) => {
  const response = await userInstance.put(`/change-interest-status/${userId}`, {
    reqStatus,
    profileId,
  });
  return response;
};

export const newProfileMatch = async (userId) => {
  const response = await userInstance.get(`/new-profile-matches/${userId}`);
  return response;
};
