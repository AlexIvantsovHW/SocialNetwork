import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
})

const store=createStore(reducers);

export default store;




