import { getadminDisplay } from "../../../helper/axios";
import { setAdminDisplay } from "./AdminDisplaySlice";

export const getadminDisplayAction = () => async (dispatch) => {
  const { status, user } = await getadminDisplay();

  if (status === "success") {
    // mount in the state
    dispatch(setAdminDisplay(user));
  }
};
