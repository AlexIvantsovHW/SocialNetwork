import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth,authTC } from "../../redux/auth-reducer";
import { compose } from 'redux';



class HeaderAPI extends React.Component {
  componentDidMount() {this.props.authTC()}
  render() {return(<Header {...this.props}/>)}
}

let mapPropsToState = (state) => {return {auth:state.auth,};};

export default compose(connect(mapPropsToState,{setAuth,authTC}))(HeaderAPI)
