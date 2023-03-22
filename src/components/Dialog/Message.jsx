import React from "react";
import Style from "./Message.module.css";
import Users from "./User/Users";
import Messages from "./Messages/Messages";
import { Field, reduxForm } from 'redux-form';


const DialogsForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
<div className={Style.bottom}>

  <div>
  <Field name={'message'} component='textarea'  placeholder="type new message"/>
  </div>
  <div><button>Push</button></div>

</div>
</form>
  )
}

const DialogReduxForm=reduxForm({form:'Message'})(DialogsForm)

const Dialogs = (props) => {
  let userElement = props.dialogPage.messageList.map((el) => (<Users name={el.name} />));
  let messageElement = props.dialogPage.messageList.map((el) => (<Messages post={el.post} />));
/*   let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);}; */
  let onSubmit = (values) => {
    console.log(values);
    props.onMessageClick(values.message);
    props.onNewMessageChange(values.message);

  };
  
  return (
    <div className={Style.dialogContainer}>
      <div>{userElement}</div>
      <div>{messageElement}</div>

      <DialogReduxForm onSubmit={onSubmit}/>
{/*       <div className={Style.bottom}>
     <div><textarea
         placeholder="Enter your message"

          value={props.dialogPage.newMessageBody}
          onChange={onNewMessageChange}
          ></textarea></div>
        <div><button onClick={props.onMessageClick}>
          Push</button></div>
      </div> */}
    </div>
  );
};

export default Dialogs;
