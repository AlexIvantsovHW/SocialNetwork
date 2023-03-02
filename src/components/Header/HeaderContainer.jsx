import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth } from "../../redux/auth-reducer";

class HeaderAPI extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me",{
        withCredentials:true
      }
      )
      .then((response) => {
        this.props.setAuth(response.data.data)
        
      });
  }

  render() {
    return(<Header {...this.props}/>)
    
  }
}

let mapPropsToState = (state) => {
  return {
    auth:state.auth,
  };
};

const HeaderContainer = connect(mapPropsToState,{setAuth})(HeaderAPI);
export default HeaderContainer;
