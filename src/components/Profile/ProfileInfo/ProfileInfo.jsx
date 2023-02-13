import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';

const MyProfile = (props) => {
  return (
    <div>
      <Logo />
      <Ava />
      <NewPostContainer dispatch={props.dispatch}/>
    </div>
  );
};
export default MyProfile;
