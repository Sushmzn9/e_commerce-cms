import { toast } from "react-toastify";

import { setCats } from "./categorySlice";
import {
  deleteCategory,
  getNewCategory,
  postNewCategory,
  updateCategory,
} from "../../../helper/axios";

export const postNewCatAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewCategory(obj);

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getCatsAction());
  }
};
export const getCatsAction = () => async (dispatch) => {
  const { status, result } = await getNewCategory();

  if (status === "success") {
    // mount in the state
    dispatch(setCats(result));
  }
};
export const updateCatAction = (obj) => async (dispatch) => {
  const respPending = updateCategory(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getCatsAction());
  }
};
export const deleteCatAction = (_id) => async (dispatch) => {
  const respPending = deleteCategory(_id);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getCatsAction());
  }
};
