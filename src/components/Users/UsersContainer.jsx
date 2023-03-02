import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  activePage,
  loader
} from "./../../redux/users-reducer";
import axios from "axios";
import React from "react";
import Preloader from './Preloader/Preloader'
import API from "../../API";

class UsersAPIcomponent extends React.Component {
  componentDidMount() {
    debugger;
    this.props.loader(true);
    API.getUsers(this.props.currentPage,this.props.pageSize)
    .then((data) => {
      this.props.setUsers(data.items);
      this.props.loader(false);})
  }

  onPostChange = (p) => {
    debugger;
    this.props.activePage(p);
    this.props.loader(true);
      API.getUsers(p,this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.loader(false);

      });
  };
  render() {
    return (
      <>
      {this.props.loadingData?<Preloader/>:null}
      <Users
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        UserPage={this.props.UserPage}
        onPostChange={this.onPostChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
      </>
      
    );
  }
}

let mapToStateProps = (state) => {
  return {
    UserPage: state.userPage,
    pageSize: state.userPage.pageSize,
    totalUsers: state.userPage.totalUsers,
    currentPage: state.userPage.currentPage,
    loadingData:state.userPage.loadingData,

  };
};

const UsersContainer = connect(mapToStateProps,{follow,unfollow:unfollow,setUsers,activePage,loader})(UsersAPIcomponent);

export default UsersContainer;
