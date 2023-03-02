import {combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    userPage:usersReducer,
    auth:authReducer,
})

const store=createStore(reducers);
window.store=store;

export default store;




