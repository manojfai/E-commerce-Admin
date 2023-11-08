import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // otpBoolean: false,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // otpPage: (state, actions) => {
    //   state.otpBoolean = actions.payload;
    // },
  },
});
export const {
  otpPage,

} = counterSlice.actions;
export default counterSlice.reducer;
