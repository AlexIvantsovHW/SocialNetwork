import React from "react";
import { getLang } from '../../selectors/selectors';
import { connect } from "react-redux";
import Nav from "./Nav";
import { LanguageAC } from "../../redux/setting-reducer";




class NavСontainer extends React.Component {
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.Language !== this.props.Language) {this.setState({Language:this.props.Language})}}

  render() {
    return (
     <Nav Language={this.props.Language} LanguageAC={this.props.LanguageAC} />
    );
  }
}

let mapStateToProps=(state)=>{
  return{
    Language: getLang(state),
  }
}

export default connect(mapStateToProps,{LanguageAC})(NavСontainer);