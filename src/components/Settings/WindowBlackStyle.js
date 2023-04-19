import React, { useState } from "react";
import s from "./style.module.css";

const WindowStyle = (props) => {
  return (
    <div className={s.left}>
      <div className={s.Dark}>
        <div className={s.columnL}>
          <div className={s.lColumn}>
            <img src={props.Style.profile} />
          </div>
          <div className={s.rColumn}>
            <p>Темный стиль</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WindowStyle;
