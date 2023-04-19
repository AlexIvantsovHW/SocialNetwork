import React from "react";
import s from "./News.module.css";
import { Language } from "../Common/Language/Language";


let newsElement;
let currentLanguage;


const News = (props) => {
    props.Language === "Russian"
    ? (currentLanguage = Language.Russian.News)
    : (currentLanguage = Language.English.News);
(props.news.title === undefined ?<div>пусто</div>:
    (newsElement = props.news.title.map((el) =>{

        return props.news.title === undefined ? (
          <div>пусто</div>
        ) : (
         
            <div className={s.subcontainer}>
              <div className={s.lColumn}>
              <div className={s.date}>
                <a /* href={el.url} */><img src={el.imageUrl}/></a>
            </div>
              </div>
              <div className={s.rColumn}>
                <div className={s.title}><div><h3>{el.title}</h3></div> </div>
                <div className={s.summary}><div><h4>{currentLanguage.Summary}</h4></div> {el.summary}</div>
                <div className={s.date}><h4>{currentLanguage.UploadingData}</h4> {`${el.updatedAt}`}</div>
              </div>
            </div>
       
        )}))
    )
  

  return(
    <div className={s.container}>
        <div><p>{currentLanguage.News}</p></div>
        <div>{newsElement}</div>
        
    </div>
  )
};
export default News;
