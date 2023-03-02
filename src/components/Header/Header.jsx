import React from "react";
import s from "./../Header/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.sub_container}>
        <div className={s.header}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCi_P6qAjVaqpOGoLnuPhL6r2Qta-qJexhCKyvHsgRMkX9xG7R3o46k067nOzOcIyA4k&usqp=CAU"></img>
        </div>
        <div className={s.center}>
          <p>menu</p>
        </div>
        <div className={s.right}>
          <div className={s.sub_login}>
          <div className={s.login}>
          <NavLink><p>
            {props.auth.login===null?'Login':props.auth.login}
            </p></NavLink>
          </div>
          <div className={s.id}>
          <p>{props.auth.id===null?'':`id: ${props.auth.id}`}</p>
          </div>
          <div className={s.id}>
          <p>{props.auth.email===null?'':`email: ${props.auth.email}`}</p>
          </div >
          </div>
          
            
        </div>
      </div>
    </div>
  );
};

export default Header;
