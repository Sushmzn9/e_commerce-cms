import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admindisplay: [],
};

const adminDisplaySlice = createSlice({
  name: "admindisplay",
  initialState,
  reducers: {
    setAdminDisplay: (state, { payload }) => {
      state.admindisplay = payload;
    },
  },
});

const { reducer, actions } = adminDisplaySlice;
export const { setAdminDisplay } = actions;
export default reducer;
