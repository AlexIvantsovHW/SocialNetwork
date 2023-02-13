import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

  let userElement = props.userElement.messageList.map((el) => <Users name={el.name} />);
  let messageElement = props.messageElement.messageList.map((el) =><Messages post={el.post} />);

  return (
    <div className={Style.dialogContainer}>
      <div>{userElement}</div>
      <div>{messageElement}</div>
      <div className={Style.bottom}>
        <div><textarea
         placeholder="Enter your message"

          value={props.newMessageBody}
          onChange={props.onNewMessageChange}
          ></textarea></div>
        <div><button onClick={props.onMessageClick}>
          Push</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
