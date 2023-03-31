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
import { compose } from 'redux';
import {withAuthNavigate}  from "../HOC/withSignNavigate";
import { getAuth, getLoadData, getPage, getPagesSize, getTotalUsers, getUsers } from './../../selectors/selectors';
import User from "./User";




class UsersAPIcomponent extends React.Component {
  
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage,this.props.pageSize);
  }

  onPostChange = (p) => {this.props.onPostChangeTC(p,this.props.pageSize)}
  
  render() {

    return (
      <>
      {this.props.loadingData?<Preloader/>:null}
      <User
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
    UserPage: getUsers(state),
    pageSize: getPagesSize(state),
    totalUsers: getTotalUsers(state),
    currentPage:getPage(state),
    loadingData:getLoadData(state),
    auth:getAuth(state),

  };
};


export default compose(
  
  connect(mapToStateProps,{unfollowAccept,followAccept,getUsersTC,onPostChangeTC,followTC,unfollowTC }),
  withAuthNavigate
)
(UsersAPIcomponent)
