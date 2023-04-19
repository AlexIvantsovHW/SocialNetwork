import React, { useState,useEffect } from "react";
import s from "./style.module.css";
import { picture } from "../Common/Pictures/Pictures";
import WindowBlackStyle  from "./WindowBlackStyle";
import WindowLightStyle from "./WindowLightStyle";
import { connect } from "react-redux";
import settingReducer from "../../redux/setting-reducer";
import check from '../Common/Language/LangChecking'

const Settings = () => {
  const [language, setlanguage] = useState('Russia');
const activateRussia=()=>{setlanguage(check);console.log(check);}
const activateEnglish=()=>{setlanguage('English');console.log(language);}


  return (
    <div className={s.container}>
      <p>Настройки</p>
      <div className={s.subcontainer}>
       <WindowBlackStyle changeStyle={activateRussia} Style={picture.light}/>
       <WindowLightStyle changeStyle={activateEnglish} Style={picture.Dark}/>
        </div>
        <div className={s.styleBottom}>
        {language==='Russia'?<button onClick={activateEnglish}>English</button>:<button onClick={activateRussia}>Russia</button>}
        </div>
              </div>

  );
};

export default connect(null,{settingReducer})(Settings);
 
