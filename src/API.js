import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {"API-KEY": "07b5797b-20dd-41ae-b7b1-f952a9fe64b0"},
});

const musicInstance = axios.create({
  baseURL: 'https://spotify23.p.rapidapi.com/tracks/',
  params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
  headers: {
    'X-RapidAPI-Key': '68a32bd379msh4964bdee059d5a0p184d67jsnbce2d19ed40b',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
})

let captcha=false

const API = {

  getUsers(p = 1, pageSize = 10, currentPage) {
    return instance
      .get(`/users?page=${p === null ? currentPage : p}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  
  getProfile(profileId = 1) {
    return instance
      .get(`/profile/${profileId}`)
      .then((response) => {
        return response.data;
      });
  },

  getStatus(profileId=2){    
    
    return instance
    .get(`/profile/status/${profileId}`)
    .then((response) => {
      return response.data===null?'empty status':response.data;
    });},

  login(email,password,rememberMe){
    debugger;
    return instance
    .post(`/auth/login`,{email,password,rememberMe,captcha})},
   

logout(){
      return instance
      .delete(`/auth/login`)},
  

  getAuth(){ return instance.get("/auth/me")},
  getFollow(id) {return instance.delete(`/follow/${id}`)},
  getUnfollow(id) {return instance.post(`/follow/${id}`)},
  

  getTracks(id) {
    debugger;
    return musicInstance
    .get(id).then((response)=>{return response.data})
    
  },

  getAva(photo){
    debugger;
    let formData=new FormData();
    formData.append('image',photo)
    return instance.put('/profile/photo',formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }
};


export default API;
