import { React } from "react";
import Logo from '../Logo/Logo';
import Ava from '../Avatar/Avatar';
import NewPostContainer from '../NewPost/NewPostContainer';
import S from '../Profile.module.css'

const MyProfile = (props) => {

  return (
    <div className={S.subcontainer}>
      <Logo Profile={props.Profile} setAvaTC={props.setAvaTC} Language={props.Language}/>
      <Ava Profile={props.Profile} status={props.status} updateStatus={props.updateStatus}Language={props.Language} />
      <NewPostContainer Profile={props.Profile} />
    </div>
  );
};
export default MyProfile;
