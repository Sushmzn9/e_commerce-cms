import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../src/components/pages/Category/categorySlice";
import systemReducer from "./System/systemSlice";
import adminReducer from "./components/pages/Signin-signup/adminSlice";
import paymentReducer from "./components/pages/PaymentOption/PaymentSlice";
import productReducer from "./components/pages/NewProduct/productSlice";
import adminDisplayReducer from "./components/pages/AdminUser/AdminDisplaySlice";
const store = configureStore({
  reducer: {
    catInfo: catReducer,
    system: systemReducer,
    adminInfo: adminReducer,
    paymentInfo: paymentReducer,
    productInfo: productReducer,
    adminDisplayInfo: adminDisplayReducer,
  },
});
export default store;
