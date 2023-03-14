import API from "../API";

const ADD_POST='ADD-POST';
const UPC='UPDATE-POST-CHANGE';
const SET_PROFILE='SET_PROFILE';


let initialAction={
        userList: [
          { id: 1, name: "Alex", message: "Hey man!" },
          { id: 2, name: "Inna", message: "Hey man!" },
          { id: 3, name: "Alina", message: "Hey man!" },
          { id: 4, name: "Jastin", message: "Hey man!" },
        ],
        newPostText: "New post.... write there",
        Profile:null,
    }


const profileReducer=(state=initialAction,action)=>{
    let stateCopy={...state, userList:[...state.userList]}; 
    
        switch(action.type){
        case ADD_POST:
            let newPost = {id: 5,name: "Grigory",message:state.newPostText,};
            stateCopy.userList.push(newPost);
            stateCopy.newPostText = "";     
            return stateCopy;

        case UPC: stateCopy.newPostText=action.newText;return stateCopy;
        case SET_PROFILE:return {...state,Profile:action.Profile}
    
        default: return state;
        }
    }

export const addPostActionCreator=()=>{return({type:ADD_POST})}
export const UpdatePostChangeActionCreator=(text)=>{return({type:UPC,newText:text})}
export const setProfile=(Profile)=>{return({type:SET_PROFILE,Profile})}
export const profileTC=(id)=>{return (dispatch)=>{API.getProfile(id).then((data) => dispatch(setProfile(data)));}}


export default profileReducer;