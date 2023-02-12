import React from "react";
import Style from "../Message.module.css";

const Users = (props) => {
  return (
    <div className={Style.userContainer}>
      <div className={Style.userAva}></div>
      <div className={Style.userName}>{props.name}</div>
    </div>
  );
};

export default Users;
