import { toast } from "react-toastify";

import {
  deletePayment,
  getPayment,
  postNewPayment,
  updatePayment,
} from "../../../helper/axios";
import { setPayments } from "./PaymentSlice";

export const postNewpayAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewPayment(obj);

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPayAction());
  }
};
export const getPayAction = () => async (dispatch) => {
  const { status, result } = await getPayment();

  if (status === "success") {
    // mount in the state
    dispatch(setPayments(result));
  }
};
export const updatePayAction = (obj) => async (dispatch) => {
  const respPending = updatePayment(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPayAction());
  }
};
export const deletePayAction = (_id) => async (dispatch) => {
  const respPending = deletePayment(_id);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPayAction());
  }
};
