import React from "react";
import Style from './News.module.css';
import Case from "./Case/Case";


const News= (props)=>{   
    let NewsList=[
        {id:1, name:'Armagedon', description:'The world in the fire'},
        {id:2, name:'War', description:'It was terrible time'},
        {id:3, name:'Travelling', description:'A lot of people prefere to travel with their pets'},
        {id:4, name:'Avalanche', description:'A terrible ancident was happened in the Everest mountain'},
    ] 

    let NewsElement=NewsList.map((el) =>(<Case name={el.name} description={el.description}/>)
    )
    return(
        <div>
           {NewsElement}
        </div>
    )
}
export default News;