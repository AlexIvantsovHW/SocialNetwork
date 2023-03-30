  import "./App.css";
  import React from "react";
  import HeaderContainer from "./components/Header/HeaderContainer";
  import Nav from "./components/Nav/Nav";
  import { Routes, Route } from "react-router-dom";
  import News from "./components/News/News";
  import MessageContainer from "./components/Dialog/MessageContainer";
  import UsersContainer from "./components/Users/UsersContainer";
  import ProfileContainer from "./components/Profile/ProfileContainer";
  import Login from "./components/Login/Login";
  import SignInContainer from './components/Login/SignIn/SignInContainer';
  import { initSuccess } from "./redux/init-reducer";
  import { compose } from 'redux';
  import { connect } from 'react-redux';
  import { withRouter } from "./components/Profile/ProfileContainer";
  import Preloader from "./components/Users/Preloader/Preloader";
  import MusicContainer from "./components/Music/MusicContainer";

class App extends React.Component{
   componentDidMount(){
    this.props.initSuccess();
  } 
  render(){
    if(!this.props.initcilization){return <Preloader/>}
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route exact path="/dialog" element={<MessageContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<MusicContainer />} />
           <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signIn" element={<SignInContainer />} />
            
          </Routes>
        </div>
      </div>
    );
  }
}
 
let mapStateToProps=(state)=>{return{initcilization:state.init.initcilization}
}
export default compose(
  withRouter,
  connect(mapStateToProps,{initSuccess})
)
(App);
