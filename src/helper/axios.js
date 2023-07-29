import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const admiAPI = rootAPI + "/admin";
const catAPI = rootAPI + "/category";

const axiosProcesor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// ========= admin api
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: admiAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};
export const postNewAdminVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: admiAPI + "/admin-verification",
    obj: data,
  };
  return axiosProcesor(obj);
};

// category api

export const postNewCategory = (data) => {
  const obj = {
    method: "post",
    url: catAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

export const getNewCategory = () => {
  const obj = {
    method: "get",
    url: catAPI,
  };
  return axiosProcesor(obj);
};
export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: catAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
  };
  return axiosProcesor(obj);
};
