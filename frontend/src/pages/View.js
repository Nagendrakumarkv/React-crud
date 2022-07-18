import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleUser } from "../redux/apiCalls";
import "./View.css";

const View = () => {
  const { id } = useParams();

  const dispatch=useDispatch();

  const singleUserData=useSelector((state)=>state.user.singleUser)

  useEffect(() => {
    if (id) {
      getSingleUser(id,dispatch)
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
