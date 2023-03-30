import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';
import S from '../Style.module.css'

const Profile = (props) => { 
  debugger;
    return (
    <div className={S.container}>
      <ProfileInfo Profile={props.Profile} Status={props.Status} updateStatus={props.updateStatus}/>
      <PostContainer />
    </div>
  );
};

export default Profile;
