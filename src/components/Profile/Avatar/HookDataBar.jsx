import React, { useEffect, useState } from "react";
import s from "./Avatar.module.css";

let aboutMe = "Обо мне:";
let body;
const HookDataBar = (props) => {
  useEffect(() => {
    setStatus(props.Status);
  }, [props.Status]);
  debugger;
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.Status);

  let activateMode = () => {
    return setEditMode(true);
  };

  let diactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  debugger;
  return (
    <div>
      {/* {!editMode&&
<div>
<span onClick={activateMode}>{props.Status||`-----`}</span>
  </div>}
  {editMode&&
  <div>
    <input autoFocus={true} onBlur={diactivateMode}  onChange={onStatusChange}/>
    </div>}
 */}{" "}
      <div className={s.center}>
        <div className={s.text}>
          {" "}
          {` Обо мне: ${
            props.Profile.aboutMe === null
              ? "информация отсутствует"
              : props.Profile.aboutMe
          }`}
        </div>
        <div>{`Контактная информация : ${
          props.Profile.contacts === null
            ? "информация отсутствует"
            : props.Profile.contacts.facebook
        }`}</div>
      </div>
      <div className={s.right}>
        <div>{`Работа: ${
          props.Profile.lookingForAJob
            ? "В поиске"
            : props.Profile.lookingForAJobDescription === null
            ? "информация отсутствует"
            : props.Profile.lookingForAJobDescription
        }`}</div>
      </div>
    </div>
  );
};

export default HookDataBar;
