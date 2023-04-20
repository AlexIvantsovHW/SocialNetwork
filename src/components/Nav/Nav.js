import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import s from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { PersonaId } from "../Header/Header";
import { picture } from "../Common/Pictures/Pictures";
import { Language } from "../Common/Language/Language";




const Nav =(props)=>{
   
    const activateRussia=()=>{props.LanguageAC('Russian');}
    const activateEnglish=()=>{props.LanguageAC('English');}
     
    let currentLanguage; (props.Language==='Russian'? currentLanguage=Language.Russian:currentLanguage=Language.English)
   
    return(
        <nav className={s.nav}>
        <NavLink to={`/profile/${PersonaId}`}>
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.profile} /></div>
              <div className={s.rColumn}><p>{currentLanguage.navbar.Profile}</p></div>
            </div>
        </NavLink>
        <div>
          <Link to="/dialog">
            <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.message} /></div>
              <div className={s.rColumn}><p>{currentLanguage.navbar.Message}</p></div>
            </div>
          </Link>
        </div>

        <Link to="/users">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.users} /></div>
              <div className={s.rColumn}><p>{currentLanguage.navbar.Users}</p></div>
            </div>
        </Link>
        <Link to="/news">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.news} /></div>
              <div className={s.rColumn}><p>{currentLanguage.navbar.News}</p></div>
            </div>
        </Link>
        <Link to="/music">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.music} /></div>
              <div className={s.rColumn}><p>{currentLanguage.navbar.Music}</p></div>
            </div>
        </Link>
        
        <div className={s.column}>
        <div className={s.lColumn}> <img src={picture.Flag.Eng} /></div>
          <div className={s.rColumn}><p onClick={activateEnglish}>English</p></div> 
      
        </div>
        <div className={s.column}>
        <div className={s.lColumn}> <img src={picture.Flag.Rus} /></div>
          <div className={s.rColumn}><p onClick={activateRussia}>Russian</p></div>
        </div>
        
     </nav>

    )
}

export default Nav;