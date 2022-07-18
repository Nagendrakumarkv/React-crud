import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./View.css";

//redux 6 7
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../redux/apiCalls";

const View = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  //redux 13 15
  const dispatch = useDispatch();

  const singleUserData = useSelector((state) => state.user.singleUser);

  useEffect(() => {
    if (id) {
      //redux 20
      getSingleUser(id, dispatch);
    }
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id} </span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{singleUserData && singleUserData.name} </span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{singleUserData && singleUserData.email} </span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{singleUserData && singleUserData.contact} </span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
