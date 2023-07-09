import React from "react";
import "./UserProfile.css";

function UserProfile(props) {
    const name = props.name;
    const email = props.email;
    const age = props.age;
    return (
      <div className="box">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>Age : {age}</h3>
      </div>
    );
  }

  export default UserProfile;