import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "07b5797b-20dd-41ae-b7b1-f952a9fe64b0",
  },
});

const API = {
  getUsers(p = 1, pageSize = 10, currentPage) {
    return instance
      .get(`/users?page=${p === null ? currentPage : p}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  
  getProfile(profileId = 1) {
    return instance
      .get(`/profile/${profileId}`)
      .then((response) => {
        return response.data;
      });
  },
};

export default API;
