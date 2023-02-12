import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';

import NewPost from '../NewPost/NewPost';

const MyProfile = (props) => {
  return (
    <div>
      <Logo />
      <Ava />
      <NewPost 
      dispatch={props.dispatch}
      />
    </div>
  );
};
export default MyProfile;
