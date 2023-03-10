import React from "react";
import logo_class from "./Logo.module.css";

const Logo = (props) => {
debugger;

  let logotip =
    "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300";
  
  let baseName='EpcikRaven';
  debugger;
    return (
    
  <div className={logo_class.logo}>
      <img src={logotip}/>
        <h1>{(props.Profile===null?baseName:props.Profile.fullName)}</h1>
     
    </div>
  );
};

export default Logo;
