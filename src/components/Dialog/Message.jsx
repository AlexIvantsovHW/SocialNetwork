import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";
import { UP_MessageNewBodyCreator,SendMessageCreator } from "../../redux/dialog-reducer";


const Dialogs = (props) => {
// 
  let state=props.store.getState().dialogPage;
let newMessageBody=()=>{
  return(state.newMessageBody)}

let onNewMessageChange=(e)=>{
let body=e.target.value;
props.store.dispatch(UP_MessageNewBodyCreator(body));
}

let onMessageClick=()=>{
  props.store.dispatch(SendMessageCreator())  
}
  let userElement = state.messageList.map((el) => <Users name={el.name} />);
  let messageElement = state.messageList.map((el) => (
    <Messages post={el.post} />
  ));

  return (
    <div className={Style.dialogContainer}>
      <div>{userElement}</div>
      <div>{messageElement}</div>
      <div className={Style.bottom}>
        <div><textarea
         placeholder="Enter your message"

          value={newMessageBody}
          onChange={onNewMessageChange}
          ></textarea></div>
        <div><button onClick={onMessageClick}>
          Push</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
