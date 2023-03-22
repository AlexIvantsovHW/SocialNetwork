 import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthNavigate } from "../HOC/withSignNavigate";

let mapStateToProps=(state)=>{
  
  return{
    dialogPage:state.dialogPage,
    auth:state.auth,
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    onNewMessageChange:(message)=> dispatch(UP_MessageNewBodyCreator(message)),
    onMessageClick:(message)=>dispatch(SendMessageCreator(message)),
} 
  }

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNavigate
)(Message)

