import API from "../API";

const ADD_POST='ADD-POST';
const UPC='UPDATE-POST-CHANGE';
const SET_PROFILE='SET_PROFILE';
const SET_STATUS='SET_STATUS';
const DELETE_POST='DELETE_POST';


let initialAction={
        userList: [
          { id: 1, name: "Alex", message: "Hey man!" },
          { id: 2, name: "Inna", message: "Hey man!" },
          { id: 3, name: "Alina", message: "Hey man!" },
          { id: 4, name: "Jastin", message: "Hey man!" },
        ],
        Profile:null,
        status:'text new status......',
    }


const profileReducer=(state=initialAction,action)=>{
        switch(action.type){
          
        case ADD_POST:
            let body=action.post;
            return{
                ...state,
                userList:[...state.userList,{ id: 5, name: 'Alexander', message: body}],
            newPostText:''
            }
 

        case UPC:return{...state,newPostText:action.post};
        case SET_PROFILE:return {...state,Profile:action.Profile};
        case SET_STATUS: debugger;
        case DELETE_POST:return {...state,userList:state.userList.pop()};

        return{...state,status:action.status};
   
        default: return state;
        }
    }

export const addPostActionCreator=(post)=>{return({type:ADD_POST,post})}
export const UpdatePostChangeActionCreator=(post)=>{return({type:UPC,post:post})}
export const setProfile=(Profile)=>{return({type:SET_PROFILE,Profile})}
export const profileTC=(id)=>{return (dispatch)=>{API.getProfile(id).then((data) => dispatch(setProfile(data)));}}
export const statusTC=(id)=>{debugger; return (dispatch)=>{API.getStatus(id).then((data)=>dispatch(setStatus(data)))}}
export const setStatus=(status)=>{debugger; return({type:SET_STATUS,status})}

export const deletePostAC=()=>{return({type:DELETE_POST})}

export default profileReducer;