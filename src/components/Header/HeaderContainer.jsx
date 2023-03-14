import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth,authTC } from "../../redux/auth-reducer";



class HeaderAPI extends React.Component {
  componentDidMount() {this.props.authTC()}
  render() {return(<Header {...this.props}/>)}
}

let mapPropsToState = (state) => {return {auth:state.auth,};};

const HeaderContainer = connect(mapPropsToState,{setAuth,authTC})(HeaderAPI);
export default HeaderContainer;
