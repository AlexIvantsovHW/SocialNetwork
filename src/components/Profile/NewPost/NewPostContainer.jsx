import {
  UpdatePostChangeActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { getLang } from "../../../selectors/selectors";
import NewPost from "./NewPost";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return { 
    state: state.profilePage,
    auth:state.auth, 
    Language: getLang(state),
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
