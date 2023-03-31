import API from "../API";
const SET_SIGN = " SET_SIGN";

let initialState = {
    FirstName:" ",
    SecondName:" ",
    email: " ",
    password: " ",
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {case SET_SIGN:return { ...state, ...action.data };
  default:return { ...state };
  }
};

export const setSign = (data) => {return { type: SET_SIGN, data }};
export const signTC=(formData)=>{ 
    return async (dispatch)=>
    { let response= await API.getSign(formData);
    dispatch(setSign(response.data.data));}}

export default signReducer;
