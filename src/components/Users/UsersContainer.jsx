import Users from "./Users";
import { connect } from 'react-redux';
import { followAC,unfollowAC,setUsersAC,activePageAC } from './../../redux/users-reducer';
import axios from "axios";
import { React } from 'react';


class UsersAPIcomponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SetUsers(response.data.items);
      });
  }

  onPostChange = (p) => {
    this.props.activePage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SetUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        UserPage={this.props.UserPage}
        onPostChange={this.onPostChange}/>
    );
  }
}

let mapToStateProps = (state) => {
  return { 
    UserPage: state.userPage,
    pageSize: state.userPage.pageSize,
    totalUsers: state.userPage.totalUsers,
    currentPage:state.userPage.currentPage,
  };};
let mapToDispatch = (dispatch) => {
  return {
    Follow: (id) => {dispatch(followAC(id))},
    Unfollow: (id) => {dispatch(unfollowAC(id))},
    SetUsers:(users)=>{dispatch(setUsersAC(users))},
    activePage:(page)=>{dispatch(activePageAC(page))},
  
  };
};

const UsersContainer = connect(mapToStateProps, mapToDispatch)(UsersAPIcomponent);

export default UsersContainer;
