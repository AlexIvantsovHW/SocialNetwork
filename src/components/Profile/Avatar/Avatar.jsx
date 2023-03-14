import React from "react";
import s from "./Avatar.module.css";

let aboutMe='Обо мне:';
const Ava = (props) => {
  return (
    <div>
      {props.Profile ===null ? (
        <div>Undefined</div>
      ) : (
        <div className={s.container}>
        
          <div className={s.center}>
            <div className={s.text}> {` Обо мне: ${
              props.Profile.aboutMe === null ? "информация отсутствует" : props.Profile.aboutMe
            }`}</div>
            <div>{`Контактная информация : ${
              props.Profile.contacts === null
                ? "информация отсутствует"
                : props.Profile.contacts.facebook
            }`}</div>
          </div>
          <div className={s.right}>
            <div>{`Работа: ${props.Profile.lookingForAJob?'В поиске':(props.Profile.lookingForAJobDescription===null?'информация отсутствует':props.Profile.lookingForAJobDescription)}`}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ava;
