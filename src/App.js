import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import MessageContainer from "./components/Dialog/MessageContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/dialog" element={<MessageContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
