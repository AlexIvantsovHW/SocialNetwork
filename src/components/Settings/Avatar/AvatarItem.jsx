import React from "react";
import style from "../Dialog.module.css";

const AvatarItem = (props) => {
  return <div className={style.avatars}>{props.ava}</div>;
};
export default AvatarItem;
