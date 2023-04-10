import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import signReducer from './sign-reducer';
import initReducer from "./init-reducer";
import settingReducer from './setting-reducer';


let reducers=combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    userPage:usersReducer,
    auth:authReducer,
    sign:signReducer,
    form: formReducer,
    init:initReducer,
    setting:settingReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;




