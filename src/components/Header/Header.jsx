import React from "react";
import s from "./../Header/Header.module.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import { Language } from "../Common/Language/Language";




let image='https://static.vecteezy.com/system/resources/previews/009/380/774/original/planet-clipart-design-illustration-free-png.png';
const Header = (props) => {
PersonaId=props.auth.id;

let LogOUT=(props)=>{return (props.logoutTC)}
let loginSource='https://social-network.samuraijs.com/login';
let currentLanguage; (props.Language==='Russian'? currentLanguage=Language.Russian:currentLanguage=Language.English)
return (
    <div className={s.container}>
      <div className={s.sub_container}>
        <div className={s.header}>
        <NavLink to={`/profile/${props.auth.id}`}><img src={image}/></NavLink>
          
        </div>
        <div className={s.center}>
        </div>
        <div className={s.right}>
          <div className={s.sub_login}>
          <div className={s.login}>
            <div  className={s.head}>
            <NavLink><p>
            {props.auth.login===null?<Link to={'/login'}><button>{currentLanguage.header.login}</button></Link>:props.auth.login}
            </p></NavLink>
            </div>
                    </div>
          <div className={s.id}>
          <p>{props.auth.id===null?'':`id: ${props.auth.id}`}</p>
          </div>
          <div className={s.email}>
          <p>{props.auth.email===null?'':`email: ${props.auth.email}`}</p>
          </div >
          <div className={s.logout}>
          {props.auth.email===null?'':<button onClick={()=>{props.logoutTC()}}>{currentLanguage.header.logout}</button>}
          </div >
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
export var PersonaId;

