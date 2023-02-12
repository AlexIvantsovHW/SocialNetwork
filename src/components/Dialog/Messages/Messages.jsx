import React from "react";
import Style from "../Message.module.css";

const Messages = (props) => {
  return (
    <div className={Style.userMessage}> 
    <div>{props.post}</div>
    </div>
  );
};

export default Messages;
