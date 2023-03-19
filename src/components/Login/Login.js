import React from "react";
import { Field, reduxForm } from "redux-form";
import S from "./../Style.module.css";
import s from "./Login.module.css";

const LoginForm = () => {
  debugger;
  return (
    <div className={s.middle}>
      <form>
        <div>
          <Field placeholder="Login" component={"input"} name={"login"} />
        </div>
        <div>
          <Field placeholder="Password" component={"input"} name={"password"} />
        </div>
        <div>
          <Field component={"input"} type="checkbox" name={"rememberMe"} />
          Remember me
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  debugger;

  return (
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>
          <div className={s.top_1}>Добро пожаловать!</div>
          <div className={s.top_2}>
            Для входа в Virtual planet world введи логин и пароль
          </div>
        </div>
        <LoginReduxForm />
      </div>
      <div className={s.bottom}>
        <form>
          <button>Sign In</button>
        </form>
      </div>
    </div>

    /* 
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>
          <div className={s.top_1}>
            Добро пожаловать!
          </div>
          <div className={s.top_2}>
            Для входа в Virtual planet world введи логин и пароль
          </div>
        </div>
        <form>
        <div className={s.middle}>
            Login:
            Pasword:
        </div>
        <div className={s.bottom}>
            <button>Войти</button>
        </div>
        </form>
        
      </div>
    </div> */
  );
};

export default Login;
