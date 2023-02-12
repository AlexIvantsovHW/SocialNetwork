import React from "react";
import style from "./Dialog.module.css";
import MessageItem from "./MessagesItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import AvatarItem from "./Avatar/AvatarItem";



const Dialogs = (props) => {

  let MessageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Iam fine,thanks" },
    { id: 4, message: "You" },
  ];
  
  let Users = [
    { id: 1, name: "Alex", ava:''},
    { id: 2, name: "Alina",ava:'' },
    { id: 3, name: "Irina",ava:'' },
    { id: 4, name: "Inna",ava:'' },
  ];

  let dialogElement = Users.map((el) => (
    <DialogItem ava={el.ava} name={el.name} id={el.id} />
  ));
  let messageElement = MessageData.map((m) => (
    <MessageItem message={m.message} />
  ));

  return (
    
    <div className={style.Dialog}>
      <div className={style.userArea}>
        <div className={style.dialogsItem}>
          <div className={style.user}>{dialogElement}</div>
        </div>
      </div>

      <div className={style.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
