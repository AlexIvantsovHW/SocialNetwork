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


let Maxlen=maxLenghtCreator(30);
let Conditions=[required,Maxlen]

const LoginForm = (props) => {
  return (
    <div className={s.middle}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="Почта" component={Input} name={"email"} validate={Conditions} />
        </div>
        <div>
          <Field placeholder="Пароль" component={Input} name={"password"} validate={Conditions} />
        </div>
        <div>
          <Field component={"input"} type="checkbox" name={"rememberMe"} />
          Запомнить меня
        </div>
        <div>
        <button>Подтвердить</button>
        </div>
        <div className={errorStyle.Error}>{props.error}</div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit=(formData)=>{debugger;props.loginTC(formData.email,formData.password,formData.rememberMe)}

  return (
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>
          <div className={s.top_1}>Добро пожаловать!</div>
          <div className={s.top_2}>Для входа в Virtual planet world введи почту и пароль</div>
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
        <div className={s.bottom}>
      <Link to='/signIn'><button>Создать аккаунт</button></Link>
      </div>
      </div>
  
    </div>
  );
};

export default connect(null,{loginTC})(Login) 
