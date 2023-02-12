import React from "react";
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo 
      dispatch={props.dispatch}
      />
      
      <MyPosts 
      state={props.state} 
      />
    </div>
  );
};

export default Profile;
