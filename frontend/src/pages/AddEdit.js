import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

//react redux 9,10
import { defaultActionUpdateUser } from "../redux/userSlice";
// import { customizedActionUpdateUser } from "../redux/apiCalls";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const { id } = useParams();

  //react redux 26,28
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    let name = data.name;
    console.log(name);
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please fill the fields");
    } else if (!id) {
      addUser(state);
      //customizedActionUpdateUser({name,email,contact},dispatch)
    } else {
      updateUser(state, id);

      //react customized actions
      //customizedActionUpdateUser({name,email,contact},dispatch)

      //redux default actions
      dispatch(defaultActionUpdateUser({ name, email, contact }));
    }
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const getSingleUserData = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data });
    }
  };

  useEffect(() => {
    getSingleUserData(id);
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
          placeholder={user.name}
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={user.email}
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder={user.contact}
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
