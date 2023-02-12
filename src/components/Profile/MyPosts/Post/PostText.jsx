import React from "react";
import s from './s.module.css'


const postText=(props)=>{
    let textElement=React.createRef();
  
    let addText=()=>{
      let newText=textElement.current.value;
       props.addPost(newText);
    }

    return(
<div className={s.containerText}>

      <textarea ref={textElement}></textarea>
      <button onClick={addText}>push</button>
      </div>
    
    )
}

export default postText;