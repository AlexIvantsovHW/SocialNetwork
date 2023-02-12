import React from "react";
import Style from './Case.module.css';

const Case=(props)=>{

    return(
        <div>
            <div className={Style.Container}>
                <div className={Style.News}>
                    {props.name}
                </div>
                <div className={Style.description}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Case;