import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./NewPost.module.css";
import { Textarea } from "../../Common/Forms/ValidationForm";
import { required } from "../../Common/Validation/Validation";
import { Language } from "../../Common/Language/Language";

let currentLanguage;
const PostForm = (props) => {
  let currentLanguage;
  props.Language === "Russian"
    ? (currentLanguage = Language.Russian.Profile.PostData)
    : (currentLanguage = Language.English.Profile.PostData);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"post"}
          component={Textarea}
          placeholder={currentLanguage.textPost}
          validate={[required]}
        />
      </div>
      <div>
        <button>{currentLanguage.addPost}</button>
      </div>
    </form>
  );
};

const ReduxPostForm = reduxForm({ form: "PostForm" })(PostForm);

const NewPost = (props) => {
  props.Language === "Russian"
    ? (currentLanguage = Language.Russian.Profile.PostData)
    : (currentLanguage = Language.English.Profile.PostData);
  let onSubmit = (values) => {
    let post = values.post;
    props.addPost(post);
    props.onPostChange(post);
  };
  return (
    <div className={s.container}>
      <div className={s.prof}>
        <p>{currentLanguage.MyPost}</p>
        <ReduxPostForm onSubmit={onSubmit} Language={props.Language} />
      </div>
    </div>
  );
};

export default NewPost;
