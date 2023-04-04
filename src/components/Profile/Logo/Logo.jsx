import React from "react";
import s from '../Logo/Logo.module.css'
import { PersonaId } from "../../Header/Header";

const Logo = (props) => {
  debugger;
  let anonimPhoto = "https://cdn-icons-png.flaticon.com/512/1177/1177568.png";
  let Unknown='Unknown'
let onChangePhoto=(e)=>{
debugger;
  if(e.target.files.length){props.setAvaTC(e.target.files[0])}  
}

  return (
      <div className={s.container}>
        <h1>{(props.Profile&&props.Profile.fullName)!= null ? (props.Profile.fullName): Unknown }</h1>
        <div className={s.ava}>         
        {(props.Profile&&props.Profile.photos.large)!= null ? 
        (<img src={props.Profile.photos.large} />): (<img src={anonimPhoto} />) }
       <div><input type="file" onChange={onChangePhoto}/></div>
      </div>
      </div>

  )
};

export default Logo;
