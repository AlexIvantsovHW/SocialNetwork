import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo dispatch={props.dispatch}/>
      <PostContainer store={props.store}/>
    </div>
  );
};

export default Profile;
