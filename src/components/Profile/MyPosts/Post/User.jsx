import React from "react";
import s from './s.module.css'

const Post = (props) => {
  let pathImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71R0RbJJD-vUKz1BBPgh2RvUjb9MhP2DUbvVhS4O1eRBrm-kAkPW-qRFmMrA6rhz-DrY&usqp=CAU";

  return (
    <div className={s.containerUser}>
      
        <img src={pathImg} className={s.img} ></img>
        <div className={s.name}>{props.name}</div>
    </div>
  );
};

export default Post;
