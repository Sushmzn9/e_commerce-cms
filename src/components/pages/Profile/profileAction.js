import { toast } from "react-toastify";
import { updateAdminPassword, updateAdminprofile } from "../../../helper/axios";
import { getAdminProfileAction } from "../Signin-signup/adminAction";

export const updateAdminProfileAction = (obj) => async (dispatch) => {
  const respPending = updateAdminprofile(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getAdminProfileAction());
  }
};

export const updateAdminPasswordAction = (obj) => async (dispatch) => {
  const respPending = updateAdminPassword(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);
};
