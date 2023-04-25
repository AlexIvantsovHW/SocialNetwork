import {
  UpdatePostChangeActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { getLang, getProfile } from "../../../selectors/selectors";
import NewPost from "./NewPost";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return { 
    state: state.profilePage,
    auth:state.auth, 
    Language: getLang(state),
    Profile:getProfile(state),
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (name,post) => {dispatch(addPostActionCreator(name,post));},
    onPostChange: (name,post) => {dispatch(UpdatePostChangeActionCreator(name,post));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
