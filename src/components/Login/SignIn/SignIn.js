import React from "react";
import S from "../../Style.module.css";
import s from "../Login.module.css";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";



const DataArea = (props) => {
  return (
    <div className={s.middle}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="First name" component={"input"} name={"FirstName"} />
        </div>
        <div>
          <Field placeholder="Second name" component={"input"} name={"SecondName"} />
        </div>
        <div>
          <Field placeholder="e-mailn" component={"input"} type="email" name={"email"} />
        </div>
        <div>
          <Field placeholder="Password" component={"input"}  name={"password"} />
        </div>
        <div className={s.bottom}>
<button>Accept</button>
</div>
      </form>
    </div>
  );
};

const AcceptReduxForm = reduxForm({ form: "SignIn" })(DataArea);

const SignIn = (props) => {
  let onSubmit=(formData)=>{
    console.log(formData)
    debugger;
    return(props.signTC(formData)) 
      }

    return (
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>
          <div className={s.top_1}>Регистрация</div>
          <div className={s.top_2}>{/* {props.form} */}</div>
        </div>
        <AcceptReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};











/* let DataArea = () => {
  return(
  <div className={s.middle}>
    <form>
      <div>
        <input placeholder="First Name" />
      </div>
      <div>
        <input placeholder="Second Name" />
      </div>
      <div>
        <input type="email" placeholder="e-mail" />
      </div>
      <div>
        <input placeholder="Password" />
      </div>
    </form>
  </div>)
  
};

const SignIn = () => {
  return (
    <div className={S.container}>
      <div className={s.subcontainer}>
        <div className={s.top}>РЕГИСТРАЦИЯ</div>
      </div>
      <DataArea/>
      <div className={s.bottom}>
        <button>Accept</button>
      </div>
    </div>
  );
};
 */
export default SignIn;
