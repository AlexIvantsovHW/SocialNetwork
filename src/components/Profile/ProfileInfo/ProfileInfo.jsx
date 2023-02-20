import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';

const MyProfile = () => {

  return (
    <div>
      <Logo />
      <Ava />
      <NewPostContainer/>
    </div>
  );
};
export default MyProfile;
