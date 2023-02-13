import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import MessageContainer from "./components/Dialog/MessageContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} dispatch={props.dispatch} />} />
          <Route exact path="/dialog" element={<MessageContainer store={props.store} dispatch={props.dispatch}/>}/>
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
