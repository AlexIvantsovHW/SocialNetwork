import React from "react";
import Style from "../Message.module.css";
import { anonimPhoto } from "../../Common/Pictures/Pictures";

const Users = (props) => {

debugger;
  return (
    <div className={Style.userContainer}>
      <div className={Style.userAva}><img src={anonimPhoto}/></div>
      <div className={Style.userName}>{props.name}</div>
    </div>
  );
};

export default Users;
