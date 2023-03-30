import React, { useEffect, useState } from "react";
import axios from "axios";
import S from "../Style.module.css";
import s from "./Style.module.css";



const playHandle='https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button-1.png'
const noname='https://cdn-icons-png.flaticon.com/512/1177/1177568.png'

const PLAY_LIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
export var CURRENT_TOKEN = localStorage.getItem("Access token");

const GetPlayList = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtist] = useState("");

  const searchArtist = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${CURRENT_TOKEN}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data);
    setArtist(data.artists.items);
  };

  useEffect(() => {
    if (CURRENT_TOKEN) {
      setToken(CURRENT_TOKEN);
    }
  }, []);

  const renderArtist = () => {
    return artists.map((artist) => (
      <div className={s.sub_container_lvl2}>
        <div className={s.image} key={artist.id}>
          <img src={artist.images.length ?artist.images[2].url:noname}/>
        </div>
        <div className={s.name}>
          <div>
          {artist.name}
          <p>Followers {artist.followers.total}</p>
          </div>
         
          
         
           </div>
        <div className={s.url}>
        <a href= {artist.external_urls.spotify}>
        <img src={playHandle}/>
         </a>
          </div>
      </div>
    ));
  };

  return token ? (
    <div className={S.sub_container_lvl1}>
      {token ? (
        <form onSubmit={searchArtist}>
          <div className={s.top}>
            <div className={s.input}>
              <input
                type="text"
                placeholder="напиши имя певца"
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </div>
            <div className={s.button}>
              <button type={"submit"}>Поиск</button>
            </div>
          </div>

          {artists.length > 0 ? renderArtist() : null}
        </form>
      ) : (
        <p>Please login</p>
      )}
    </div>
  ) : (
    <div> Please login</div>
  );
};
export default GetPlayList;
