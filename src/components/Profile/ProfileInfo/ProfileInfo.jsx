import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';

const MyProfile = (props) => {
  return (
    <div>
      <Logo Profile={props.Profile} setAvaTC={props.setAvaTC}/>
      <Ava Profile={props.Profile} status={props.status} updateStatus={props.updateStatus} />
      <NewPostContainer />

    </div>
  );
};
export default MyProfile;
