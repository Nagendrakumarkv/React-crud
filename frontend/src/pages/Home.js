import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

//redux 6 7
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/apiCalls";

const Home = () => {
  
  //redux 12 14
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    //redux 18
    getUsers(dispatch);
  }, [dispatch]);

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure to delete this user")) {
      //redux 24
      deleteUser(id, dispatch);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>
                    <Link to={`/update/${user._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => {
                        onDeleteUser(user._id);
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${user._id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
