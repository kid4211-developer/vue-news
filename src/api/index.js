import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

export const getNewsList = () => {
  return axios.get(`${config.baseUrl}/news/2.json`);
};

export const getAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
};

export const getJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
};

export const getUserInfo = (id) => {
  return axios.get(`${config.baseUrl}/user/${id}.json`);
};

export const getItemInfo = (id) => {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
};

export const getList = (pageName) => {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
};
