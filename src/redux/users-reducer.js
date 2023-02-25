const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";


  let initialAction ={users:[]};

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
        return {...state, users:[...action.users]} 
    default:
            return state;
    }
  };

export const followAC = (id) => {return { type: FOLLOW, userId: id };};
export const unfollowAC = (id) => {return { type: UNFOLLOW, userId: id };};
export const setUsersAC = (users) => {return { type: SETUSERS, users:users };};

export default usersReducer;
