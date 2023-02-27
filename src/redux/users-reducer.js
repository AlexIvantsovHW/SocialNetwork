const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const ACTIVE_PAGE='ACTIVE_PAGE';


  let initialAction ={
        users:[],
        pageSize:50,
        totalUsers:1000,
        currentPage:[3],
    
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
    default:
            return state;
    }
  };

export const followAC = (id) => {return { type: FOLLOW, userId: id };};
export const unfollowAC = (id) => {return { type: UNFOLLOW, userId: id };};
export const setUsersAC = (users) => {return { type: SETUSERS, users:users };};
export const activePageAC=(page)=>{ return {type:ACTIVE_PAGE,currentPage:page}}




export default usersReducer;
