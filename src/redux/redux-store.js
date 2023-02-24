import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    userPage:usersReducer,
})

const store=createStore(reducers);

export default store;




