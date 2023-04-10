import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';


const MyProfile = (props) => {

  return (
    <div>
      <Logo Profile={props.Profile} setAvaTC={props.setAvaTC} Language={props.Language}/>
      <Ava Profile={props.Profile} status={props.status} updateStatus={props.updateStatus}Language={props.Language} />
      <NewPostContainer />

    </div>
  );
};
export default MyProfile;
