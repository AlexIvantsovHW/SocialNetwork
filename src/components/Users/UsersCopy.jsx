import React from "react";
import s from "./Users.module.css";
import  axios from 'axios';

const Users = (props) => {
  
if (props.UserPage.users.length===0){
axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
  props.SetUsers(response.data.items);
})}

  let userElement = props.UserPage.users.map((el) => {

    return (
      <div className={s.container}>
        <div>
          <img src={el.photos} className={s.ava} />
          <div className={s.name}>{el.name}</div>
          {el.followed
          ?<button className={s.button} onClick={()=>{props.Follow(el.id)}}>Unfollow</button>:
          <button className={s.button} onClick={()=>{props.Unfollow(el.id)}}>Follow</button>}
        </div>
        <div>
          <div className={s.status}>{el.status}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={s.top}>
        <div>USER</div>
        <div>STATUS</div>
        <div>LOCATION</div>
      </div>
      {userElement}
    </div>
  );
};

export default Users;
