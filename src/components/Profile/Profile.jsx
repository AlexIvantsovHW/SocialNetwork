import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';
import s from './Profile.module.css'
const Profile = (props) => { 
  debugger;
  return (
    <div className={s.container}>
      <ProfileInfo Profile={props.Profile}/>
      <PostContainer />
    </div>
  );
};

export default Profile;
