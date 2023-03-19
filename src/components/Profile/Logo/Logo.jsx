import React from "react";
import s from '../Logo/Logo.module.css'

const Logo = (props) => {
  let anonimPhoto = "https://cdn-icons-png.flaticon.com/512/1177/1177568.png";
  let Unknown='Unknown'
  return (
      <div className={s.container}>
        <h1>{(props.Profile&&props.Profile.fullName)!= null ? (props.Profile.fullName): Unknown }
   </h1>
        <div className={s.ava}>         
        {(props.Profile&&props.Profile.photos.large)!= null ? 
        (<img src={props.Profile.photos.large} />): (<img src={anonimPhoto} />) }
   
   </div>
    
      </div>

  )
};

export default Logo;
