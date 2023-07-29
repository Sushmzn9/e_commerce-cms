import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { setModalShow } = actions;
export default reducer;
