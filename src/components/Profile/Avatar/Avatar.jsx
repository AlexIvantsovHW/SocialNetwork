import React from "react";
import s from "./Avatar.module.css";

const Ava = (props) => {
  debugger;
  let anonimPhoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  debugger;
  return (
    <div>
      {props.Profile ===null ? (
        <div>Undefined</div>
      ) : (
        <div className={s.container}>
          <div className={s.ava}>
            {props.Profile.photos.large === null ? (
              <img src={anonimPhoto} />
            ) : (
              <img src={props.Profile.photos.large} />
            )}
          </div>
          <div className={s.center}>
            <div>{`About myself: ${
              props.Profile.aboutMe === null ? "информация отсутствует" : props.Profile.aboutMe
            }`}</div>
            <div>{`Contact data: ${
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
