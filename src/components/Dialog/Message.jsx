import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
  let userElement = props.dialogPage.messageList.map((el) => <Users name={el.name} />);
  let messageElement = props.dialogPage.messageList.map((el) =><Messages post={el.post} />);
  let onNewMessageChange = (e) => {let body = e.target.value; props.onNewMessageChange(body);}
  return (
    
    <div className={Style.dialogContainer}>
      <div>{userElement}</div>
      <div>{messageElement}</div>
      <div className={Style.bottom}>
        <div><textarea
         placeholder="Enter your message"

          value={props.dialogPage.newMessageBody}
          onChange={onNewMessageChange}
          ></textarea></div>
        <div><button onClick={props.onMessageClick}>
          Push</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
