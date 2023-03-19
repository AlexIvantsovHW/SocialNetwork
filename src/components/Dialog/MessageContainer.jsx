import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthNavigate } from "../HOC/withAuthNavigate";

let mapStateToProps=(state)=>{
  
  return{
    dialogPage:state.dialogPage,
    auth:state.auth,
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    onNewMessageChange:(body)=> dispatch(UP_MessageNewBodyCreator(body)),
    onMessageClick:()=>dispatch(SendMessageCreator()),
} 
  }

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthNavigate
)(Message)

