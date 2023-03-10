import React from "react";
import User from './User/User';

const NavProfile = (props)=>{
    let navElement=props.navElement.map((el)=>(<User name={el.name}/>));
    return(
        <div>
            {navElement}
        </div>
    )
}

export default NavProfile;