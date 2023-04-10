export const getUsers=(state)=>{return state.userPage;}
export const getPagesSize=(state)=>{return state.userPage.pageSize;}
export const getTotalUsers=(state)=>{return state.userPage.totalUsers;}
export const getPage=(state)=>{return state.userPage.currentPage;}
export const getLoadData=(state)=>{return state.userPage.loadingData;}
export const getAuth=(state)=>{return state.auth;}
export const getLang=(state)=>{return state.setting.Language}

export const getProfile=(state)=>{return state.profilePage.Profile;}
export const getStatus=(state)=>{return state.profilePage.status;}
export const getForm=(state)=>{return state.form;}
export const getDialogs=(state)=>{return state.dialogPage;}
