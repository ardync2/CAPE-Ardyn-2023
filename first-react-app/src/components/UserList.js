import React from "react";
import UserProfile from "./UserProfile";
import "./UserList.css";

function UserList({people}) {
    return (
      <ul>
        {people.map(({name, email, age}) => <UserProfile name ={name} email={email} age = {age}/>)}
      </ul>
    )
   }
  
export default UserList;