import React from "react";
import { Field, reduxForm } from "redux-form";
import S from "./../Style.module.css";
import s from "./Login.module.css";
import { Link} from "react-router-dom";
import { maxLenght, maxLenghtCreator, required } from "../Common/Validation/Validation";
import { Input } from "../Common/Forms/ValidationForm";
import { connect } from 'react-redux';
import { loginTC } from './../../redux/auth-reducer';
import errorStyle from '../Common/Forms/Style.module.css'
import { getLang } from "../../selectors/selectors";
import { Language } from "../Common/Language/Language";



let currentLanguage; 

let Maxlen=maxLenghtCreator(30);
let Conditions=[required,Maxlen]

const LoginForm = (props) => {
  return (
    <div className={s.middle}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={currentLanguage.formData.email} component={Input} name={"email"} validate={Conditions} />
        </div>
        <div>
          <Field placeholder={currentLanguage.formData.password} component={Input} name={"password"} validate={Conditions} />
        </div>
        <div>
          <Field component={"input"} type="checkbox" name={"rememberMe"} />
          {currentLanguage.formData.RememberMe}
        </div>
        <div>
        <button>{currentLanguage.formData.accept}</button>
        </div>
        <div className={errorStyle.Error}>{props.error}</div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit=(formData)=>{props.loginTC(formData.email,formData.password,formData.rememberMe)} 
  (props.Language==='Russian'? currentLanguage=Language.Russian.login:currentLanguage=Language.English.login)
 
  return (
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>
          <div className={s.top_1}>{currentLanguage.UpText}</div>
          <div className={s.top_2}>{currentLanguage.MidText}</div>
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
        <div className={s.bottom}>
  <button ><a href={'https://social-network.samuraijs.com/signUp'}>{currentLanguage.createAccount}</a></button>
      </div>
      </div>
  
    </div>
  );
};
const mapStateToProps=(state)=>{
  return{
    Language: getLang(state),
  }
}

export default connect(mapStateToProps,{loginTC})(Login) 

