import React, { useState } from "react";
import s from "./Avatar.module.css";

let aboutMe='Обо мне:';
let body;
class Ava extends React.Component{
  
state={
  editMode:true,
  statusText:'Твой первый комментарий'
}
activateMode=()=>{this.setState({editMode:true})}
diactivateMode=()=>{this.setState({editMode:false})}

changeStatus= (e) => {body = e.target.value; this.props.updateStatus(body)}

componentDidUpdate(prevProps,prevState){
  debugger;
  let b=this.props.status; 
  if (this.prevProps!==this.status){this.setState({statusText:this.props.status})}
  console.log('It update')
}

  render(){
    return (
      <div>
        {this.props.Profile ===null ? (
          <div>Undefined</div>
        ) : (
          <div className={s.container}>
          <div>
            {this.state.editMode===true?(<div><span onClick={this.diactivateMode.bind(this)}>
              {!this.props.status?this.state.statusText:this.props.status}
              </span></div>):(<div><input autoFocus onBlur={this.activateMode.bind(this)} value={this.props.status} onChange={this.changeStatus}/></div>)}
            
            
          </div>
            <div className={s.center}>
              <div className={s.text}> {` Обо мне: ${
                this.props.Profile.aboutMe === null ? "информация отсутствует" : this.props.Profile.aboutMe
              }`}</div>
              <div>{`Контактная информация : ${
                this.props.Profile.contacts === null
                  ? "информация отсутствует"
                  : this.props.Profile.contacts.facebook
              }`}</div>
            </div>
            <div className={s.right}>
              <div>{`Работа: ${this.props.Profile.lookingForAJob?'В поиске':(this.props.Profile.lookingForAJobDescription===null?'информация отсутствует':this.props.Profile.lookingForAJobDescription)}`}</div>
            </div>
          </div>
        )}
      </div>
    );

  }
}

export default Ava;
