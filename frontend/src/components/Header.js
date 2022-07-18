import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

//react redux 6
import { useSelector } from "react-redux";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  //react redux 13
  const name = useSelector((state) => state.user.userInfo.name);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div className="header">
      <p className="logo">User Mangement System</p>
      {/* react redux 28 */}
      <p style={{ color: "red" }}>{name}</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Home");
            }}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("AddUser");
            }}
          >
            Add User
          </p>
        </Link>
        <Link to="About">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("About");
            }}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
