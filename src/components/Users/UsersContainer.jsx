import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  activePageAC,
  loadingDataAC
} from "./../../redux/users-reducer";
import axios from "axios";
import  { Component } from "react";
import React from "react";
import Preloader from './Preloader/Preloader'

class UsersAPIcomponent extends React.Component {
  componentDidMount() {
    this.props.loader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SetUsers(response.data.items);
        this.props.loader(false);
      });
  }

  onPostChange = (p) => {
    this.props.activePage(p);
    this.props.loader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SetUsers(response.data.items);
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
let mapToDispatch = (dispatch) => {
  return {
    Follow: (id) => {
      dispatch(followAC(id));
    },
    Unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    SetUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    activePage: (page) => {
      dispatch(activePageAC(page));
    },
    loader:(loadingData)=>{
    dispatch(loadingDataAC(loadingData))},
  };
};

const UsersContainer = connect(
  mapToStateProps,
  mapToDispatch
)(UsersAPIcomponent);

export default UsersContainer;
