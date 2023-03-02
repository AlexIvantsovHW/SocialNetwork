import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';

const Profile = (props) => { 
  debugger;
  return (
    <div>
      <ProfileInfo Profile={props.Profile}/>
      <PostContainer />
    </div>
  );
};

export default Profile;
