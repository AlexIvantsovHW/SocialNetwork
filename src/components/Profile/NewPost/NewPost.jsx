import React from "react";
import { Field,reduxForm } from "redux-form";
import s from "./NewPost.module.css";
import { Textarea } from "../../Common/Forms/ValidationForm";
import { required } from "../../Common/Validation/Validation";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field name={'post'} component={Textarea}  placeholder="type new post text" validate={[required]}/>
       </div>
      <div>
          <button>add comment</button>
        </div>
    </form>
  );
};

const ReduxPostForm=reduxForm({ form: "PostForm" })(PostForm)

const NewPost = (props) => {
let onSubmit=(values)=>{
    let post=values.post;
    props.addPost(post);
    props.onPostChange(post)}
  return (
    <div className={s.container}>
      <div className={s.prof}>
        <p>My POSTS</p>
        <ReduxPostForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default NewPost;
