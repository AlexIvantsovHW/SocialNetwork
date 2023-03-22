const UP_MessageNewBody='UP_MessageNewBody';
const SEND_MESSAGE='SEND_MESSAGE';

let initialAction={
        messageList: [
          { name: "Alex", post: "how are you?" },
          { name: "Inna", post: "fine" },
          { name: "Alina", post: "thx" },
          { name: "Jastin", post: "and u?" },
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
            return{
                ...state,
                messageList:[...state.messageList,{ name: "Alex", post:body }],
            }    
        }        
            default: return state;
        }
}


export const SendMessageCreator=(message)=>{return({type:SEND_MESSAGE,message})}
export const UP_MessageNewBodyCreator =(body)=>{return ({type:UP_MessageNewBody,body:body})}
export default dialogReducer;