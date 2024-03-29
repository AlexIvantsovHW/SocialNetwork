import API from "../API";

const ADD_POST='ADD-POST';
const UPC='UPDATE-POST-CHANGE';
const SET_PROFILE='SET_PROFILE';
const SET_STATUS='SET_STATUS';
const SET_AVA='SET_AVA';


let initialAction={
        userList: [
          { id: 1, name: "Alex", message: "Hey man!" },
          { id: 2, name: "Inna", message: "Hey man!" },
          { id: 3, name: "Alina", message: "Hey man!" },
          { id: 4, name: "Jastin", message: "Hey man!" },
        ],
        Profile:null,
        status:'---',
    }


const profileReducer=(state=initialAction,action)=>{
        switch(action.type){
          
        case ADD_POST:
            let body=action.post;
            let Name=action.name
            return{
                ...state,
                userList:[...state.userList,{ id: 5, name: Name, message: body}],
            newPostText:''
            }
 

        case UPC:return{...state,newPostText:action.post};
        case SET_PROFILE:return {...state,Profile:action.Profile};
        case SET_STATUS:return{...state,status:action.status};
        case SET_AVA: ; return{...state,Profile:{...state.Profile,photos:action.photo}};
   
        default: return state;
        }
    }

export const addPostActionCreator=(name,post)=>{return({type:ADD_POST,name,post})}
export const UpdatePostChangeActionCreator=(name,post)=>{return({type:UPC,name,post:post})}
export const setProfile=(Profile)=>{return({type:SET_PROFILE,Profile})}
export const profileTC=(id)=>{return async (dispatch)=>{let data=await API.getProfile(id);dispatch(setProfile(data));}}
export const statusTC=(id)=>{ return async (dispatch)=>{let data=await API.getStatus(id); dispatch(setStatus(data))}}
export const setStatus=(status)=>{return({type:SET_STATUS,status:status})}
export const setAva=(photo)=>{return({type:SET_AVA,photo})}
export const setAvaTC=(photo)=>{return async (dispatch)=>{let response=await API.getAva(photo);dispatch(setAva(response.data.data.photos))}}

export default profileReducer;