import Users from "./Users";
import { connect } from 'react-redux';
import { followAC,unfollowAC,setUsersAC,activePageAC } from './../../redux/users-reducer';



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

const UsersContainer = connect(mapToStateProps, mapToDispatch)(Users);

export default UsersContainer;
