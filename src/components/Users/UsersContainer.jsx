import Users from "./Users";
import { connect } from 'react-redux';
import { followAC,unfollowAC,setUsersAC } from './../../redux/users-reducer';



let mapToStateProps = (state) => {
  return { UserPage: state.userPage};};
let mapToDispatch = (dispatch) => {
  return {
    Follow: (id) => {dispatch(followAC(id))},
    Unfollow: (id) => {dispatch(unfollowAC(id))},
    SetUsers:(users)=>{dispatch(setUsersAC(users))},
  };
};

const UsersContainer = connect(mapToStateProps, mapToDispatch)(Users);

export default UsersContainer;
