import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';

const MyProfile = (props) => {
  debugger;
  return (

    <div>
      <Logo Profile={props.Profile}/>
      <Ava Profile={props.Profile}/>
      <NewPostContainer />
    </div>
  );
};
export default MyProfile;
