import React from "react";
import Nav_class from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav className={Nav_class.nav}>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/dialog">Messages</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
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
      <div className={Nav_class.friend_bar}></div>
    </nav>
  );
};

export default Nav;
