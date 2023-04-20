import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth,authTC,logoutTC } from "../../redux/auth-reducer";
import { compose } from 'redux';
import { getLang, getProfile } from "../../selectors/selectors";




class HeaderAPI extends React.Component {
  componentDidMount() {this.props.authTC()}
  render() {return(<Header {...this.props}/>)}
}

let mapPropsToState = (state) => {return {
  auth:state.auth,
  Language: getLang(state),
  Profile: getProfile(state)
}};

export default compose(connect(mapPropsToState,{setAuth,authTC,logoutTC}))(HeaderAPI)
