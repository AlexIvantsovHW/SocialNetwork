import { connect } from "react-redux";
import MyPosts from "./MyPost";


let mapStateToProps=(state)=>{return{userElement:state.profilePage}}
let mapDispatchToProps=(dispatch)=>{return{  }}


const PostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default PostContainer;
