import User from "./Post/User";
import React from "react";
import s from './Post/s.module.css'

const MyPosts = (props) => {
  let userElement = props.userElement.userList.map((el) => (
    <User name={el.name} message={el.message}/>
  ));
  return (
    <div className={s.container}>
      <div>{userElement}</div>
    </div>
  );
};

export default MyPosts;
