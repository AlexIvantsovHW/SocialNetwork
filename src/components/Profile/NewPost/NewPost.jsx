import React from "react";
import { UpdatePostChangeActionCreator,  addPostActionCreator } from "../../../redux/profile-reducer";
import NewPost_class from "./NewPost.module.css";


const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdatePostChangeActionCreator(text));
  };

  return (
    <div>
      <div className={NewPost_class.prof}>
        <p>My POSTS</p>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.postChange}
        />
        <div>
          <button onClick={addPost}>add comment</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
