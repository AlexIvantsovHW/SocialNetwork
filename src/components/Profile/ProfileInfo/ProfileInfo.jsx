import { React } from "react";
import Logo from '../Logo/Logo';
import ProfileBar from "../Avatar/ProfileBar";
import NewPostContainer from '../NewPost/NewPostContainer';

const MyProfile = (props) => {
  debugger;
  return (
    <div>
      <Logo Profile={props.Profile}/>
      <ProfileBar Profile={props.Profile} Status={props.Status} updateStatus={props.updateStatus}/>
      <NewPostContainer />

    </div>
  );
};
export default MyProfile;
