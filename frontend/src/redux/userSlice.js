import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    singleUser: [],
    pending: false,
    error: false,
  },

  //react customized ations method
  reducers: {

    //Get all users
    getUserStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    getUserError: (state) => {
      state.error = true;
      state.pending = false;
    },

    //Get single user
    getSingleUserStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getSingleUserSuccess: (state, action) => {
      state.pending = false;
      state.singleUser = action.payload;
    },
    getSingleUserError: (state) => {
      state.error = true;
      state.pending = false;
    },

    //Add user
    addUserStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.pending = false;
      state.users.push(action.payload);
    },
    addUserError: (state) => {
      state.error = true;
      state.pending = false;
    },

    //Delete user
    deleteUserStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.pending = false;
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload),
        1
      );
    },
    deleteUserError: (state) => {
      state.error = true;
      state.pending = false;
    },

    //Update user
    updateUserStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.pending = false;
      state.users[
        state.users.findIndex((user) => user._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserError,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
  addUserStart,
  addUserSuccess,
  addUserError,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
  getSingleUserStart,
  getSingleUserSuccess,
  getSingleUserError,
} = userSlice.actions;

export default userSlice.reducer;
