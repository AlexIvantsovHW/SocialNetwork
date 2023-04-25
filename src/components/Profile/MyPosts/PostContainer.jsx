import { connect } from "react-redux";
import MyPosts from "./MyPost";
import { getLang, getProfile } from "../../../selectors/selectors";

let mapStateToProps=(state)=>{
    return{
        userElement:state.profilePage,
        profileForm: state.form.PostForm,
        Language: getLang(state),
        Profile:getProfile(state),
    }}



const PostContainer=connect(mapStateToProps,{})(MyPosts);

export default PostContainer;
