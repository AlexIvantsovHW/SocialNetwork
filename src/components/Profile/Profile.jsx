import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './MyPosts/PostContainer';
import S from '../Style.module.css'

const Profile = (props) => { 
    return (
    <div className={S.Container}>
      <ProfileInfo
        Profile={props.Profile}
        status={props.status}
        updateStatus={props.updateStatus}
        setAvaTC={props.setAvaTC}
        Language={props.Language}/>
      <PostContainer />
    </div>
  );
};

export default Profile;
