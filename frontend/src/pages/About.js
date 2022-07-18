import React from "react";

//react-redux
import { useSelector } from "react-redux";

const About = () => {
  
  //react redux 7
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <div style={{ marginTop: "150px" }}>
      <h2>
        {/* react-redux 15 */}
        <p> {name}</p>
        This is React User Contact Management System Application using Node and
        Express JS along with Routing
      </h2>
    </div>
  );
};

export default About;
