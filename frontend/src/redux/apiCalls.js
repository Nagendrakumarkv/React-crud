import {
  getUserStart,
  getUserError,
  getUserSuccess,
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
} from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

//Get all users
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("http://localhost:5000/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserError());
  }
};

//Get single user 
export const getSingleUser = async (id, dispatch) => {
  dispatch(getSingleUserStart());
  try {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    dispatch(getSingleUserSuccess(response.data));
  } catch (err) {
    dispatch(getSingleUserError());
  }
};

//Add user
export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await axios.post("http://localhost:5000/user", user);
    dispatch(addUserSuccess(res.data));
    toast.success("User added successfully");

    //Handling invalid backend url
    // if (res.data !== "invalid url") {
    // dispatch(addUserSuccess(res.data));
    // toast.success("User added successfully");
    // } else {
    // dispatch(addUserError());
    // toast.success("User added unsuccessfully");
    // }
  } catch (err) {
    dispatch(addUserError());
    toast.success("User added unsuccessfully");
  }
};

//Delete user
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`http://localhost:5000/user/${id}`);
    dispatch(deleteUserSuccess(id));
    toast.success("User deleted successfully");

    //Handling invalid backend url
    // if (res.data !== "invalid url") {
    //   toast.success("User deleted successfully");
    //   dispatch(deleteUserSuccess(id));
    // } else {
    //   toast.error("User deleted unsuccessfully");
    //   dispatch(deleteUserError());
    // }
  } catch (err) {
    dispatch(deleteUserError());
    toast.error("User deleted unsuccessfully");
  }
};

//Update user
export const updateUser = async (user, id, dispatch) => {
  dispatch(updateUserStart());
  try {
    await axios.put(`http://localhost:5000/user/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
    toast.success("User updated successfully");

    //Handling invalid backend url
    // if (res.data !== "invalid url") {
    // dispatch(updateUserSuccess({ id, user }));
    // toast.success("User updated successfully");
    // } else {
    // dispatch(updateUserError());
    // toast.success("User updated unsuccessfully");
    // }
  } catch (err) {
    dispatch(updateUserError());
    toast.success("User updated unsuccessfully");
  }
};
