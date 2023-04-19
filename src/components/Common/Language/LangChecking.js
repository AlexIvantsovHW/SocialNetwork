import React from "react";
import { connect } from "react-redux";
import { getLang } from "../../../selectors/selectors";

const mapStateToProps=(state)=>{return{Language: getLang(state)}}

let LangChecking=(props)=>{
    debugger; 
    let currentLanguage;
    (props.Language==='Russian'?currentLanguage=props.Language.Russian:currentLanguage=props.Language.English)
        return(
            <div>   
                {currentLanguage}
            </div>
        )
}



export default connect(mapStateToProps,{})(LangChecking);

