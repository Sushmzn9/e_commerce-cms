import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const admiAPI = rootAPI + "/admin";
const admidAPI = rootAPI + "/admindisplay";
const catAPI = rootAPI + "/category";
const payAPI = rootAPI + "/payment";
const productAPI = rootAPI + "/product";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

const axiosProcesor = async ({ method, url, obj, isPrivate, refreshToken }) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();

  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });

    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      //1. get new accessJWt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      //2. continue the request

      return axiosProcesor({ method, url, obj, isPrivate, refreshToken });
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// ========= admin api

export const getadminDisplay = () => {
  const obj = {
    method: "get",
    url: admidAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const getAdminInfo = () => {
  const obj = {
    method: "get",
    url: admiAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: admiAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};
export const signInAdmin = (data) => {
  const obj = {
    method: "post",
    url: admiAPI + "/sign-in",
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
//=======
export const updateAdminprofile = (data) => {
  const obj = {
    method: "put",
    url: admiAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const updateAdminPassword = (data) => {
  const obj = {
    method: "put",
    url: admiAPI + "/change-password",
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

// ========= category api
export const postNewCategory = (data) => {
  const obj = {
    method: "post",
    url: catAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};
export const getCategories = () => {
  const obj = {
    method: "get",
    url: catAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: catAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

// ==========+ get new refreshJWT

export const getNewAccessJWT = () => {
  const obj = {
    method: "get",
    url: admiAPI + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcesor(obj);
};
export const logoutAdmin = (_id) => {
  const obj = {
    method: "post",
    url: admiAPI + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcesor(obj);
};

// ========= payment api
export const postNewPayment = (data) => {
  const obj = {
    method: "post",
    url: payAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};
export const getPayment = () => {
  const obj = {
    method: "get",
    url: payAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const updatePayment = (data) => {
  const obj = {
    method: "put",
    url: payAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const deletePayment = (_id) => {
  const obj = {
    method: "delete",
    url: payAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

// ========== Product

export const postNewProduct = (data) => {
  const obj = {
    method: "post",
    url: productAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const getProducts = (_id) => {
  const obj = {
    method: "get",
    url: _id ? productAPI + "/" + _id : productAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const deleteProduct = (_id) => {
  const obj = {
    method: "delete",
    url: productAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const updateProduct = (data) => {
  const obj = {
    method: "put",
    url: productAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};
// ======== restet password
export const requestPassOTP = (email) => {
  const obj = {
    method: "post",
    url: admiAPI + "/request-opt",
    obj: { email },
  };
  return axiosProcesor(obj);
};
