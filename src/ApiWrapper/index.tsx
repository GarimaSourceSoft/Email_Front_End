import axios from "axios";

const BACKEND_URL: String = process.env.REACT_APP_BACKEND_URL as String;

export const getDataApi = async (URL: String, data = {}) => {
  const headers: any = {};
  headers.Authorization = `Bearer ${localStorage.getItem("Tokken") || ""}`;
  return await axios.get(`${BACKEND_URL as string}/${URL}`, {
    headers: headers,
  });
};

export const postDataApi = async (URL: String, data = {}) => {
  const headers: any = {};
  headers.Authorization = `Bearer ${localStorage.getItem("Tokken") || ""}`;
  return await axios.post(`${BACKEND_URL as string}/${URL}`, data, {
    headers: headers,
  });
};

export const patchDataApi = async (URL: String, data = {}) => {
  const headers: any = {};
  headers.Authorization = `Bearer ${localStorage.getItem("Tokken") || ""}`;
  return await axios.patch(`${BACKEND_URL as string}/${URL}`, data, {
    headers: headers,
  });
};

export const putDataApi = async (URL: String, data = {}) => {
  const headers: any = {};
  headers.Authorization = `Bearer ${localStorage.getItem("Tokken") || ""}`;
  return await axios.put(`${BACKEND_URL as string}/${URL}`, data, {
    headers: headers,
  });
};

export const DeleteDataApi = async (URL: String, data = {}) => {
  const headers: any = {};
  headers.Authorization = `Bearer ${localStorage.getItem("Tokken") || ""}`;
  return await axios.delete(`${BACKEND_URL as string}/${URL}`, {
    headers: headers,
    data,
  });
};
