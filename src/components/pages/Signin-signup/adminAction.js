import { toast } from "react-toastify";
import { postNewAdmin } from "../../../helper/axios";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};
