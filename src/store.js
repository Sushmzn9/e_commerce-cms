import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../src/components/pages/Category/categorySlice";
import { setModalShow } from "./System/systemSlice";
const store = configureStore({
  reducer: {
    catInfo: catReducer,
    systemInfo: setModalShow,
  },
});
export default store;
