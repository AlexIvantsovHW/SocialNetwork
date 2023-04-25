import React from "react";
import s from './s.module.css'

let pathImg = "https://cdn-icons-png.flaticon.com/512/1177/1177568.png";
let Users = (props) => {
  return (
    <div className={s.userContainer}>
      <div className={s.subUserContainer}>
        <div className={s.userImg}><img src={pathImg}/> {props.name}</div>
        
      </div>
      <div className={s.postContainer}>{props.message}</div>
    </div>
  );
};


const MyPosts = (props) => {
  let userElement = props.userElement.userList.map((el) => (
    <Users name={el.name} message={el.message} />
  ));
  return (
    <div className={s.container}>
        <div>{userElement}</div>
    </div>
  );
};

export default MyPosts;
