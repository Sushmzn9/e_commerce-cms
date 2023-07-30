import { toast } from "react-toastify";
import { postNewAdmin, signInAdmin } from "../../../helper/axios";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const signInAdminAction = async (obj) => {
  const pendingResp = signInAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  console.log(token);
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
  }
  //get the user data and mount in the state
};
