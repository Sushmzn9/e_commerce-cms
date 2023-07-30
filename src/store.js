import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../src/components/pages/Category/categorySlice";
import systemReducer from "./System/systemSlice";
import adminReducer from "./components/pages/Signin-signup/adminSlice";
const store = configureStore({
  reducer: {
    catInfo: catReducer,
    system: systemReducer,
    adminInfo: adminReducer,
  },
});
export default store;
