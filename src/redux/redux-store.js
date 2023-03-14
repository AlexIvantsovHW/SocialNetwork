import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import thunk from "redux-thunk";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    userPage:usersReducer,
    auth:authReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;




