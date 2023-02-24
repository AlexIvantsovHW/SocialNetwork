import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';

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
