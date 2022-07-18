import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";

//react customized actions method
export const customizedActionUpdateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "http://localhost:5000/user/redux_state_user/123",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
