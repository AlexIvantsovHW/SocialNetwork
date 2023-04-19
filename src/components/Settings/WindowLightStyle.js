import React from "react";
import s from "./style.module.css";

const WindowLightStyle = (props) => {
  return (
    <div className={s.right}>
      <div className={s.Light}>
        <div className={s.columnR}>
          <div className={s.lColumn}>
            <img src={props.Style.profile} />{" "}
          </div>
          <div className={s.rColumn}>
            <p>Светлый стиль</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WindowLightStyle;
