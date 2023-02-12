import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';


let store = {
  _state: {
    profilePage: {
      userList: [
        { id: 1, name: "Alex", message: "Hey man!" },
        { id: 2, name: "Inna", message: "Hey man!" },
        { id: 3, name: "Alina", message: "Hey man!" },
        { id: 4, name: "Jastin", message: "Hey man!" },
      ],
      newPostText: "New post.... write there",},

  dialogPage:{
    messageList: [
      { name: "Alex", post: "how are you?" },
      { name: "Inna", post: "fine" },
      { name: "Alina", post: "thx" },
      { name: "Jastin", post: "and u?" },
    ],
    newMessageBody:'',
  }
  },

  getState() {return this._state;},
  _callSubscriber() {console.log('state changed')}, 
  subscribe(observe) {this._callSubscriber = observe;},
  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.dialogPage=dialogReducer(this._state.dialogPage,action);
    this._callSubscriber(this._state);
  }
};







export default store;