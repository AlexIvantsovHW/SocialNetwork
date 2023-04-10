 import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthNavigate } from "../HOC/withSignNavigate";
import { getAuth, getDialogs, getLang } from "../../selectors/selectors";

let mapStateToProps=(state)=>{
  
  return{
    dialogPage:getDialogs(state),
    auth:getAuth(state),
    Language: getLang(state)
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

