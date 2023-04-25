import API from "../API";
import { stopSubmit, StopSubmitAction } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN='SET_LOGIN';

let initialState = {
  id: null,
  email: null,
  password:null,
  rememberMe:false,
  login: null,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    case SET_LOGIN:return { ...state, ...action.data }; 
    default:return { ...state };
  }
};


export const setAuth = (data) => {return { type: SET_USER_DATA, data }};
export const authTC=()=>{return async (dispatch)=>{let response= await API.getAuth();dispatch(setAuth(response.data.resultCode===1?(initialState):response.data.data));}}

export const loginTC=(email,password,rememberMe,captcha)=>{return async (dispatch)=>{
  let response=await API.login(email,password,rememberMe,captcha);
  if (response.data.resultCode===0){dispatch(authTC())}
  else{dispatch(stopSubmit('login',{_error:response.data.messages}))
    }
   }}


export const logoutTC=()=>{return async (dispatch)=>{
  let response= await API.logout();
  if (response.data.resultCode===0){dispatch(authTC(null,null,null,null))}}}
export const setLogin=(data)=>{return{type:SET_LOGIN,data}}

export default authReducer;
