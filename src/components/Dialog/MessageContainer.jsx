 import {UP_MessageNewBodyCreator,SendMessageCreator,} from "../../redux/dialog-reducer";
import Message from "./Message";
import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthNavigate } from "../HOC/withSignNavigate";
import { getAuth, getDialogs, getLang} from "../../selectors/selectors";
import React from "react";




class MessageContainer extends React.Component{
  componentDidUpdate(prevProps,prevState){
    if (this.props.dialogPage!== prevProps.dialogPage) {
      this.setState(this.props.dialogPage);
    }
  }

  
  render(){
    return(
<Message {...this.props}/>

    )
      }
}
let mapStateToProps=(state)=>{
  
  return{
    dialogPage:getDialogs(state),
    auth:getAuth(state),
    Language: getLang(state),
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    onNewMessageChange:(name,message)=> {dispatch(UP_MessageNewBodyCreator(name,message))},
    onMessageClick:(name,message)=>dispatch(SendMessageCreator(name,message)),
} 
  }

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  /* withAuthNavigate */
)(MessageContainer)

