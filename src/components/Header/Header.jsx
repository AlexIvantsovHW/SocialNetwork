import React from "react";
import s from "./../Header/Header.module.css";
import { Link,  NavLink } from "react-router-dom";
import { Language } from "../Common/Language/Language";
import {planet } from "../Common/Pictures/Pictures";


const Header = (props) => {
let LogOUT=(props)=>{return (props.logoutTC)}
let link=(props.auth.id===null?28081:props.auth.id)
let currentLanguage; (props.Language==='Russian'? currentLanguage=Language.Russian:currentLanguage=Language.English)
return (

    <div className={s.container}>
      <div className={s.sub_container}>
        <div className={s.header}>
        <NavLink to={`/profile/${link}`}><img src={planet}/></NavLink>
          
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
export var PersonalLogin;

