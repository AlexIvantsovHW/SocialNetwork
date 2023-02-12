import React from "react";
import Style from "../NavProfile.module.css";
const NavUser = (props) => {
  return (
    <div className={Style.container}>

      <div className={Style.element}>
        <div className={Style.avatar}></div>
        <div className={Style.nameUser}>{props.name}</div>
      </div>
    </div>
  );
};

export default NavUser;
