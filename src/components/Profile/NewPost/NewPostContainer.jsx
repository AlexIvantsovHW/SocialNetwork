import {
  UpdatePostChangeActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { 
    state: state.profilePage 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
    dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(UpdatePostChangeActionCreator(text));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
