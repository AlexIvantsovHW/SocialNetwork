import React from "react";
import Image from "./Preloader.gif";
import s from "./Style.module.css";

const Preloader = (props) => {
  return (
    <div>
      <img src={Image} className={s.preload} />
    </div>
  );
};

export default Preloader;
