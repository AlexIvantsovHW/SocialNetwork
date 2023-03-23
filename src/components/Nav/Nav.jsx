import React from "react";
import s from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { PersonaId } from "../Header/Header";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {

  render(){
    return (
      <nav className={s.nav}>
        <NavLink to={`/profile/${PersonaId}`}><p>Мой профиль</p></NavLink>
        <Link to="/dialog"><p>Сообщения</p></Link>
        <Link to="/users"><p>Пользователи</p></Link>
        <Link to="/news"><p>Новости</p></Link>
        <Link to="/music"><p>Музыка</p></Link>
        <Link to="/settings"><p>Настройки</p></Link>
    </nav>
  
    )

  }

};

export default Nav;
