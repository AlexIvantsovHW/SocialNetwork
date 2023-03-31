export const FOLLOW_UNFOLLOW=(following,state,action)=>{
    let followingStatus=following;
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed:followingStatus};
        }
        return u;
      }),
    };}

