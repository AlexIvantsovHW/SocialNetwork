import { connect } from "react-redux";
import MyPosts from "./MyPost";
import { getLang } from "../../../selectors/selectors";

let mapStateToProps=(state)=>{
    return{
        userElement:state.profilePage,
        profileForm: state.form.PostForm,
        Language: getLang(state)}}



const PostContainer=connect(mapStateToProps,{})(MyPosts);

export default PostContainer;
