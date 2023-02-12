import React from "react";
import Nav_class from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import NavProfile from './../Profile/Friends/NavProfile';



const Nav = (props) => {
  return (
    <nav className={Nav_class.nav}>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/dialog">Messages</Link>
      </div>
      <div>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/music">Music</Link>
      </div>
      <div>
        <Link to="/settings">Settings</Link>
      </div>  
      <div className={Nav_class.friend_bar}>
        <p>FRIENDS</p>
        <NavProfile state={props.state}/>
      </div>
    </nav>
  );
};

export default Nav;
