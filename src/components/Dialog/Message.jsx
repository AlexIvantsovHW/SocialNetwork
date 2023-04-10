import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";
import { Field, reduxForm } from 'redux-form';
import { Language } from "../Common/Language/Language";

let currentLanguage;
const DialogsForm=(props)=>{
  (props.Language==='Russian'? currentLanguage=Language.Russian.Message:currentLanguage=Language.English.Message)
  return(
    <form onSubmit={props.handleSubmit}>
<div className={Style.bottom}>

  <div>
  <Field name={'message'} component='textarea'  placeholder={currentLanguage.textType}/>
  </div>
  <div><button>{currentLanguage.Push}</button></div>

</div>
</form>
  )
}

const DialogReduxForm=reduxForm({form:'Message'})(DialogsForm)

const Dialogs = (props) => {

  let userElement = props.dialogPage.messageList.map((el) => (<Users name={el.name} />));
  let messageElement = props.dialogPage.messageList.map((el) => (<Messages post={el.post} />));

  let onSubmit = (values) => {
    props.onMessageClick(values.message);
    props.onNewMessageChange(values.message);

  };
  
  return (
    <div className={Style.dialogContainer}>
      <div>{userElement}</div>
      <div>{messageElement}</div>

      <DialogReduxForm onSubmit={onSubmit} Language={props.Language}/>

    </div>
  );
};

export default Dialogs;
