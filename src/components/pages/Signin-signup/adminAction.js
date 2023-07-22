import { postNewAdmin } from "../../../helper/axios";
import { toast } from "react-toastify";
export const createNewAdminAction = async (obj) => {
  const { status, message } = await postNewAdmin(obj);
  toast[status](message);
};
