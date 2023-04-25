import React from "react";
import s from "../Logo/Logo.module.css";
import { Language } from "../../Common/Language/Language";
import { anonimPhoto} from "../../Common/Pictures";

const Logo = (props) => {
  let currentLanguage;
  props.Language === "Russian"
    ? (currentLanguage = Language.Russian.Profile)
    : (currentLanguage = Language.English.Profile);
  let onChangePhoto = (e) => {
    if (e.target.files.length) {
      props.setAvaTC(e.target.files[0]);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.ava}>
        <label>
        <div>
          <input  type="file" onChange={onChangePhoto}/>
        {(props.Profile && props.Profile.photos.large) != null ? (
          <img src={props.Profile.photos.large} />
        ) : (
          <img src={anonimPhoto} />
        )}
        </div>
        </label>

        </div>
      
      <div className={s.right}>     
         <h1>
        {(props.Profile && props.Profile.fullName) != null
          ? props.Profile.fullName
          : currentLanguage.unknownUser}
      </h1></div>
    </div>
  );
};

export default Logo;
