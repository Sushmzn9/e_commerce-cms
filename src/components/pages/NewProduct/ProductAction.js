import { toast } from "react-toastify";
import {
  deleteProduct,
  getProducts,
  postNewProduct,
} from "../../../helper/axios";
import { setProducts } from "./productSlice";

export const postNewProductAction = (data) => async (dispatch) => {
  const pending = postNewProduct(data);

  toast.promise(pending, {
    pending: "Please wait",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    /// fetch all the products
    dispatch(getProductsAction());
  }
};

export const getProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();
  console.log(products);
  if (status === "success") {
    /// mount data in the store
    dispatch(setProducts(products));
  }
};
export const deleteProductAction = (_id) => async (dispatch) => {
  const pending = deleteProduct(_id);

  toast.promise(pending, {
    pending: "please wait ....",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getProductsAction());
  }
};
