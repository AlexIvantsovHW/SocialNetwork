const LANG = "LANG";

let initialState = {
  Language:'Russian',

};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      debugger;
      return { ...state,  Language: action.Lang};
    default:
      return { ...state };
  }
};

export const LanguageAC = (Lang) => {debugger; return { type: LANG,Lang};
};
export default settingReducer;
