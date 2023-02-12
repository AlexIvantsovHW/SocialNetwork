import React from "react";
import Style from "./Song.module.css";

const Songs = (props) => {
  return (
    <div className={Style.Container}>
      <div className={Style.song}>
        <div className={Style.button} />
        <div className={Style.SongName}>{props.song}</div>
      </div>
    </div>
  );
};

export default Songs;
