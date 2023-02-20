import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';

{/*const MessageContainer = () => {
  return(
  <StoreContex.Consumer>
    {
    (store) => {
      let state = store.getState().dialogPage;
      let newMessageBody = () => state.newMessageBody;
      let onNewMessageChange = (e) => {
      let body = e.target.value;store.dispatch(UP_MessageNewBodyCreator(body));};
      let onMessageClick = () => store.dispatch(SendMessageCreator());
      return (
        <Message
          messageElement={state}
          userElement={state}
          newMessageBody={newMessageBody}
          onNewMessageChange={onNewMessageChange}
          onMessageClick={onMessageClick}
        />
      );
    }}
  </StoreContex.Consumer>
  )
};*/}



let mapStateToProps=(state)=>{
  
  return{
    dialogPage:state.dialogPage,
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    onNewMessageChange:(body)=> dispatch(UP_MessageNewBodyCreator(body)),
    onMessageClick:()=>dispatch(SendMessageCreator()),
} 
  }
   

const MessageContainer =connect(mapStateToProps,mapDispatchToProps)(Message);
export default MessageContainer;
