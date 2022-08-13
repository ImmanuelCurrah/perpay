import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfPayments: 0,
  totalAmountOfPaymentWithinCompany: 0,
};

let numberOfPaymentsSlice = createSlice({
  name: "numberOfUserPayments",
  initialState: initialState,
  reducers: {
    recordPayment: function (state, action) {
      state.numberOfPayments = state.numberOfPayments + 1;
    },
    recordPaymentAmount: function (state, action) {
      state.totalAmountOfPaymentWithinCompany =
        state.totalAmountOfPaymentWithinCompany + action.payload;
    },
  },
});

export const { recordPayment, recordPaymentAmount } =
  numberOfPaymentsSlice.actions;
export default numberOfPaymentsSlice.reducer;
