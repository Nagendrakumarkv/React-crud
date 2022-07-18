import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const defaultActionUpdateUser = createAsyncThunk(
  "update/user",
  async (user) => {
    const res = await axios.post(
      "http://localhost:5000/user/redux_state_user/123",
      user
    );
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "nagendra",
      email: "naga@gmail.com",
      contact: 9883838838,
    },
    pending: false,
    error: false,
  },

  //react customized ations method
  reducers: {
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // updateError: (state) => {
    //   state.error = true;
    //   state.pending = false;
  },

  //react default actions method
  extraReducers: {
    [defaultActionUpdateUser.pending]: (state) => {
      state.pending = true;
    },
    [defaultActionUpdateUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [defaultActionUpdateUser.rejected]: (state) => {
      state.error = true;
      state.pen = false;
    },
  },
});

//(default actions method) don't need export beacuse react exported the actions  by default

//(customized actions method) needs to export
// export const { updateStart, updateSuccess, updateError } = userSlice.actions;

export default userSlice.reducer;
