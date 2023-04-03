import React, { useEffect } from "react";
import GetPlayList from "./GetPlaylist";
import S from '../Style.module.css'
import { CURRENT_TOKEN } from "./GetPlaylist";
import s from './Style.module.css'

const SPOTIFY_AUTH_ENDPOINT='https://accounts.spotify.com/authorize';
const CLIENT_ID='04db25ea8cb94578b52945855a8469ec';
const REDIRECT_URL_AFTER_LOGIN='https://alexivantsovhw.github.io/SocialNetwork/#/music'
const SCOPES=['user-read-currently-playing','user-read-playback-state']
const SCOPES_DELIMETER='%20';
const SCOPES_URL_PARAM=SCOPES.join(SCOPES_DELIMETER)


const handleLogin=()=>{
    window.location=`${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
}
const getReturnedParamFromSpotifyAuth=(hash)=>{
    const stringAfterHashtag=hash.substring(1);
    const paramsInURL=stringAfterHashtag.split('&')
    const paramsSplitUp=paramsInURL.reduce((accumulator,currentValue)=>{
        console.log(currentValue)
        const [key,value]=currentValue.split('=');
        accumulator[key]=value;
        return accumulator;
    },{})
    return paramsSplitUp;
}


const MusicContainer=()=>{
   useEffect(()=>{
        if (window.location.hash){
            const {access_token,
                token_type,
                expires_in}=getReturnedParamFromSpotifyAuth(window.location.hash)
                localStorage.clear();
                localStorage.setItem('Access token',access_token)
                localStorage.setItem('Token type',token_type)
                localStorage.setItem('Expires in',expires_in)
                
            }
    })
     return(
        <div className={S.container}>
            <div className={s.button2}><button onClick={handleLogin}>Login</button></div>
            
            <GetPlayList/>
        </div>
    )
}


export default MusicContainer;