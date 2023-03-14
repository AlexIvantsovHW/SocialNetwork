import API from "../API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const ACTIVE_PAGE='ACTIVE_PAGE';
const LOADING_DATA='LOADING_DATA';


  let initialAction ={
        users:[],
        pageSize:50,
        totalUsers:2000,
        currentPage:[1],
        loadingData:false,
    
};

const usersReducer = (state = initialAction, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }return u;
        }),
      };
      case SETUSERS:
        return {...state, users:[...action.users]};
    
    case ACTIVE_PAGE:
        return {...state,currentPage:action.currentPage}; 

    case LOADING_DATA:
      return {...state,loadingData:action.loadingData};  
    default:
            return state;
    }
  };

export const followAccept = (id) => {return { type: FOLLOW, userId: id };};
export const unfollowAccept = (id) => {return { type: UNFOLLOW, userId: id };};
export const setUsers = (users) => {return { type: SETUSERS, users:users };};
export const activePage=(page)=>{ return {type:ACTIVE_PAGE,currentPage:page}};
export const loader=(loadingData)=>{return {type:LOADING_DATA,loadingData:loadingData}};


export const getUsersTC=(currentPage,pageSize)=>{
  return (dispatch)=>{
      dispatch(loader(true));
      API.getUsers(currentPage,pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(loader(false));})
  }
  }

export const onPostChangeTC=(p,pageSize)=>{
  return (dispatch)=>{
 dispatch(activePage(p));
    dispatch(loader(true));
      API.getUsers(p,pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(loader(false));})
  }
}

export const followTC=(userId)=>{return (dispatch)=>{API.getFollow(userId)}};
export const unfollowTC=(id)=>{return (dispatch)=>{API.getUnfollow(id);}};






export default usersReducer;
