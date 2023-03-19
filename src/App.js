import "./App.css";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import MessageContainer from "./components/Dialog/MessageContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route exact path="/dialog" element={<MessageContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
