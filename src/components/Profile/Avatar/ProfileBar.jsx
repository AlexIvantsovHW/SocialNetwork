import React, { useEffect, useState } from "react";
import s from "./Avatar.module.css";



const ProfileBar = (props) => {
  useEffect(()=>{
    setStatus(props.Status)},[props.Status])

  let [editMode,setEditMode]=useState(false);
  let [status,setStatus]=useState(props.Status);

  let activateEditMode=()=>{setEditMode(true)}
  let diactivateEditMode=()=>{setEditMode(false);
    props.updateStatus(status)}
  let onStatusChange=(e)=>{setStatus(e.currentTarget.value)}

  let Span=<span onClick={activateEditMode}>{props.Status}</span>;
  let Input=<input onBlur={diactivateEditMode} autoFocus={true} onChange={onStatusChange}/>;
  return (
    <div className={s.container}>
      <div className={s.center}>
        <div>
        {editMode===false?Span:Input}
        </div>
      </div>
      <div className={s.right}>
      <div>You</div>
        <div>You</div>
      </div>
    </div>
  );
};

export default ProfileBar;
