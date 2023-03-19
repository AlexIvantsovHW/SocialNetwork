import React from "react";
import s from "./../Header/Header.module.css";
import { NavLink } from "react-router-dom";


let image='https://static.vecteezy.com/system/resources/previews/009/380/774/original/planet-clipart-design-illustration-free-png.png';
const Header = (props) => {
PersonaId=props.auth.id;
let loginSource='https://social-network.samuraijs.com/login';
return (
    <div className={s.container}>
      <div className={s.sub_container}>
        <div className={s.header}>
        <NavLink to={`/profile/${props.auth.id}`}><img src={image}/></NavLink>
          
        </div>
        <div className={s.center}>
          <p>menu</p>
        </div>
        <div className={s.right}>
          <div className={s.sub_login}>
          <div className={s.login}>
          <NavLink><p>
            {props.auth.login===null?<a href={loginSource}>Login</a>:props.auth.login}
            </p></NavLink>
          </div>
          <div className={s.id}>
          <p>{props.auth.id===null?'':`id: ${props.auth.id}`}</p>
          </div>
          <div className={s.id}>
          <p>{props.auth.email===null?'':`email: ${props.auth.email}`}</p>
          </div >
          </div>
          
            
        </div>
      </div>
    </div>
  );
};
export var PersonaId;
export default Header;
