import { anonimPhoto } from './../components/Common/Pictures';

const UP_MessageNewBody='UP_MessageNewBody';
const SEND_MESSAGE='SEND_MESSAGE';

let initialAction={
        messageList: [
          { name: "Alex", post: "how are you?", avatar:anonimPhoto },
          { name: "Inna", post: "fine",avatar:anonimPhoto  },
          { name: "Alina", post: "thx",avatar:anonimPhoto  },
          { name: "Jastin", post: "and u?",avatar:anonimPhoto  },
        ],
    }

const dialogReducer=(state=initialAction,action)=>{


    switch (action.type){
        case UP_MessageNewBody:
            return{
            ...state,
            newMessageBody:action.body}

        case SEND_MESSAGE:{
            let body=action.message;
            let Name=action.name;
            return{
                ...state,
                messageList:[...state.messageList,{name:Name, post:body }],
            }    
        }        
            default: return state;
        }
}


export const SendMessageCreator=(name,message)=>{return({type:SEND_MESSAGE,name,message})}
export const UP_MessageNewBodyCreator =(name,body)=>{return ({type:UP_MessageNewBody,name,body})}
export default dialogReducer;