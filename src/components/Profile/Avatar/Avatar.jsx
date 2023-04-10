import React, { useState } from "react";
import s from "./Avatar.module.css";
import { Language } from "../../Common/Language/Language";


let aboutMe='Обо мне:';
let body;
class Ava extends React.Component{ 
 
state={
  editMode:true,
  statusText:'Твой первый комментарий'
}
activateMode=()=>{this.setState({editMode:true})}
diactivateMode=()=>{this.setState({editMode:false})}

changeStatus= (e) => {
  body = e.target.value; this.props.updateStatus(body)}

componentDidUpdate(prevProps,prevState){
  let b=this.props.status; 
  if (this.prevProps!==this.status){this.setState({statusText:this.props.status})}
  console.log('It update')
}

  render(){
    let currentLanguage;
    (this.props.Language==='Russian'? currentLanguage=Language.Russian.Profile:currentLanguage=Language.English.Profile) 
    return (
      
      <div>
        {this.props.Profile ===null ? (
          <div>{currentLanguage.unknownUser}</div>
        ) : (
          <div className={s.container}>
          <div>
            {this.state.editMode===true?(<div><span onClick={this.diactivateMode.bind(this)}>
              {!this.props.status?this.state.statusText:this.props.status}
              </span></div>):(<div><input autoFocus onBlur={this.activateMode.bind(this)} value={this.props.status} onChange={this.changeStatus}/></div>)}
            
            
          </div>
            <div className={s.center}>
              <div className={s.text}> {`${currentLanguage.formData.aboutMe} ${
                this.props.Profile.aboutMe === null ? currentLanguage.formData.emptyData: this.props.Profile.aboutMe
              }`}</div>
              <div>{`${currentLanguage.formData.contactData} ${
                this.props.Profile.contacts === null
                  ? currentLanguage.formData.emptyData
                  : this.props.Profile.contacts.facebook
              }`}</div>
            </div>
            <div className={s.right}>
              <div>{`${currentLanguage.formData.job}
              ${this.props.Profile.lookingForAJob?
              currentLanguage.formData.jobSearch:
              (this.props.Profile.lookingForAJobDescription===null?
              currentLanguage.formData.emptyData:this.props.Profile.lookingForAJobDescription)}`}</div>
            </div>
          </div>
        )}
      </div>
    );

  }
}

export default Ava;
