import Users from "./Users";
import { connect } from "react-redux";
import {
  followAccept,
  unfollowAccept,
  getUsersTC,
  onPostChangeTC,
  unfollowTC,
  followTC
} from "./../../redux/users-reducer";
import React from "react";
import Preloader from './Preloader/Preloader'


class UsersAPIcomponent extends React.Component {
  componentDidMount() {this.props.getUsersTC(this.props.currentPage,this.props.pageSize);}

  onPostChange = (p) => {this.props.onPostChangeTC(p,this.props.pageSize)}
  
  render() {
    return (
      <>
      {this.props.loadingData?<Preloader/>:null}
      <Users
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        UserPage={this.props.UserPage}
        onPostChange={this.onPostChange}
        follow={this.props.followAccept}
        unfollow={this.props.unfollowAccept}
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

const UsersContainer = connect(mapToStateProps,
  {unfollowAccept,followAccept,getUsersTC,
     onPostChangeTC,followTC,unfollowTC })(UsersAPIcomponent);

export default UsersContainer;
