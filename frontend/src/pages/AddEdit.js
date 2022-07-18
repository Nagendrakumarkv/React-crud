import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/apiCalls";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const singleUserData = useSelector((state) =>
    state.user.users.find((user) => user._id === id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please fill the fields");
    } else if (!id) {
      addUser(state, dispatch);
    } else {
      updateUser(state, id, dispatch);
    }
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (singleUserData !== undefined) {
      setState(singleUserData);
    }
  }, [id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          maxWidth: "400px",
          padding: "20px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={name}
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={email}
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder={contact}
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
