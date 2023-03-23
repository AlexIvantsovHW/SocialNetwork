
import { setAuth } from "./auth-reducer";

const INIT_SUCCES = "INIT_SUCCES";

let initialState = {
  initcilization:false,
};

const initReducer = (state = initialState, action) => {
  switch (action.type) 
  {case INIT_SUCCES: debugger; 
    return { ...state,initcilization:true}; 
  default:return { ...state };
  }
};

export const initSuccess = () => {return { type: INIT_SUCCES}};
export const initSuccessTC=()=>(dispatch)=>{
let promise=dispatch(setAuth());
Promise.all([promise]).then(()=>{dispatch(initSuccess())})  
;
}
export default initReducer;
