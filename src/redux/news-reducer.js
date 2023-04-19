import API from "../API";


const SET_NEWS = "SET_NEWS";


let initialState = {
  data:{
  }
};


const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:return { ...state,  title:action.data}; 
    default:return { ...state };
  }
};
export const newsAC=(data)=>{return{type: SET_NEWS, data}}
export const newsTC=()=>{ return async (dispatch)=>{let data=await API.getNews(); dispatch(newsAC(data))}}

export default newsReducer;
