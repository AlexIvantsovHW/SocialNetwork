import React from "react";
import NewPost_class from "./NewPost.module.css";


const NewPost = (props) => {
  let newPostElement = React.createRef();


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.UpdatePostChangeActionCreator(text);
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
          <button onClick={props.addPost}>add comment</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
