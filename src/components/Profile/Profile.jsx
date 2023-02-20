import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <PostContainer/>
    </div>
  );
};

export default Profile;
