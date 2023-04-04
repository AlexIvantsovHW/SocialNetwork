import {
  UpdatePostChangeActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { 
    state: state.profilePage,
    auth:state.auth, 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {dispatch(addPostActionCreator(post));},
    onPostChange: (post) => {dispatch(UpdatePostChangeActionCreator(post));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
