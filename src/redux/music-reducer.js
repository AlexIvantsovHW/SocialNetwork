import API from "../API";
import { music_API } from "../API";


const SET_TRACK = "SET_TRACK";



let initialState = {
  id: null,
  name: null,
  type:null,
  uri:null,
  external_urls:{},
};

const musicReducer = (state = initialState, action) => {
  switch (action.type)
   {case SET_TRACK: return { ...state, ...action.data };
  default:return { ...state };
  }
  }

export const setMusic = (data) => {return { type: SET_TRACK, data }};


export default musicReducer;
