const ADD_POST='ADD-POST';
const UPC='UPDATE-POST-CHANGE';
const ADD_MESSAGE='ADD-MESSAGE';

let initialAction={
        userList: [
          { id: 1, name: "Alex", message: "Hey man!" },
          { id: 2, name: "Inna", message: "Hey man!" },
          { id: 3, name: "Alina", message: "Hey man!" },
          { id: 4, name: "Jastin", message: "Hey man!" },
        ],
        newPostText: "New post.... write there",}


const profileReducer=(state=initialAction,action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {id: 5,name: "Grigory",message: postMessage,};
            state.userList.push(newPost);
            state.newPostText = "";     
            return state;

        case ADD_MESSAGE:
            let text = {name: "Grigory",post: state.newPostText};
            state.messageList.push(text);
            return state;      

        case UPC:
            state.newPostText=action.newText;
            return state;  
        default: return state;
        }
    }

export const addPostActionCreator=()=>{return({type:ADD_POST})}
export const UpdatePostChangeActionCreator=(text)=>{return({type:UPC,newText:text})}
export default profileReducer;