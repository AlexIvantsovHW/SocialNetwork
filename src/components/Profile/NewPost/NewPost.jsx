import React from "react";
import s from "./NewPost.module.css";


const NewPost = (props) => {

  let onPostChange = (e) => {
    let text=e.target.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.container}>
      <div className={s.prof}>
        <p>My POSTS</p>
        <textarea

        placeholder='type new post'
          onChange={onPostChange}
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
