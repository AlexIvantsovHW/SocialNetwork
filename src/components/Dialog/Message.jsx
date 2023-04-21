import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";
import { Field, reduxForm } from "redux-form";
import { Language } from "../Common/Language/Language";

let currentLanguage;
const DialogsForm = (props) => {
  props.Language === "Russian"
    ? (currentLanguage = Language.Russian.Message)
    : (currentLanguage = Language.English.Message);
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={Style.bottom}>
        <div>
          <Field
            name={"message"}
            component="textarea"
            placeholder={currentLanguage.textType}
          />
                  <button>{currentLanguage.Push}</button>
        </div>
      </div>
    </form>
  );
};

const DialogReduxForm = reduxForm({ form: "Message" })(DialogsForm);

const Dialogs = (props) => {
  let userElement = props.dialogPage.messageList.map((el) => (
    <Users name={el.name} />
  ));
  let messageElement = props.dialogPage.messageList.map((el) => (
    <Messages post={el.post} />
  ));

  let onSubmit = (values) => {
    props.onMessageClick(props.auth.login, values.message);
    props.onNewMessageChange(props.auth.login, values.message);
  };

  return (
    <div className={Style.dialogContainer}>
      <div className={Style.subcontainer}>
        <div className={Style.left}>{userElement}</div>
        <div className={Style.right}>{messageElement}</div>
      </div>

      <div className={Style.bottom_subcontainer}>
        <DialogReduxForm onSubmit={onSubmit} Language={props.Language} />
      </div>
    </div>
  );
};

export default Dialogs;
