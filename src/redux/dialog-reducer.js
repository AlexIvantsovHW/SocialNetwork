const UP_MessageNewBody='UP_MessageNewBody';
const SEND_MESSAGE='SEND_MESSAGE';

let initialAction={
        messageList: [
          { name: "Alex", post: "how are you?" },
          { name: "Inna", post: "fine" },
          { name: "Alina", post: "thx" },
          { name: "Jastin", post: "and u?" },
        ],
        newMessageBody:'',
}

const dialogReducer=(state=initialAction,action)=>{
    switch (action.type){
        case UP_MessageNewBody:
            state.newMessageBody=action.body;
            return state;
        case SEND_MESSAGE:
            let body=state.newMessageBody;
            state.newMessageBody='';
            state.messageList.push({ name: "Alex", post: body });
            return state;            
            default: return state;
        }
}


export const SendMessageCreator=()=>{return({type:SEND_MESSAGE})}
export const UP_MessageNewBodyCreator =(body)=>{return ({type:UP_MessageNewBody,body:body})}
export default dialogReducer;