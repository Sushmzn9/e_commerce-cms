import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Payment: [],
};

const PaymentSlice = createSlice({
  name: "Payment",
  initialState,
  reducers: {
    setPayments: (state, { payload }) => {
      state.Payment = payload;
    },
  },
});

const { reducer, actions } = PaymentSlice;
export const { setPayments } = actions;
export default reducer;
