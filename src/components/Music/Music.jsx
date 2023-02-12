import React from "react";
import style from "./Music.module.css";
import Songs from "./Songs/Song";



const Music = (props) => {

  let album=[
    {id:1, song:'Cant stop'},
    {id:2, song:'This is war'},
    {id:3, song:'Attack'},
    {id:4, song:'Blue moon'},
    {id:5, song:'Open my eyes'},
    {id:6, song:'World in the fire'},
  ]
  
  let AlbumElement=album.map((el)=>(<Songs song={el.song}/>))

  return (
    <div>
      {AlbumElement}
          </div>
  );
};

export default Music;
