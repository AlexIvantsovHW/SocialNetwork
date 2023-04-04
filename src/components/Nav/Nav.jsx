import React from "react";
import s from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { PersonaId } from "../Header/Header";
import { NavLink } from "react-router-dom";
import { picture } from "../Common/Pictures/Pictures";

class Nav extends React.Component {
  render() {
    return (
      <nav className={s.nav}>
        <NavLink to={`/profile/${PersonaId}`}>
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.profile} /></div>
              <div className={s.rColumn}><p>Мой профиль</p></div>
            </div>
        </NavLink>
        <div>
          <Link to="/dialog">
            <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.message} /></div>
              <div className={s.rColumn}><p>Сообщения</p></div>
            </div>
          </Link>
        </div>

        <Link to="/users">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.users} /></div>
              <div className={s.rColumn}><p>Пользователи</p></div>
            </div>
        </Link>
        <Link to="/news">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.news} /></div>
              <div className={s.rColumn}><p>Новости</p></div>
            </div>
        </Link>
        <Link to="/music">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.music} /></div>
              <div className={s.rColumn}><p>Музыка</p></div>
            </div>
        </Link>
        <Link to="/settings">
        <div className={s.column}>
              <div className={s.lColumn}> <img src={picture.light.settings} /></div>
              <div className={s.rColumn}><p>Настройки</p></div>
            </div>
        </Link>
      </nav>
    );
  }
}

export default Nav;
