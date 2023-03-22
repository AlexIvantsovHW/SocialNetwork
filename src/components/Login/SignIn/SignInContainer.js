import React from "react";
import { connect } from 'react-redux';
import SignIn from "./SignIn";
import { signTC,setSign } from "../../../redux/sign-reducer";

class SignInContainer extends React.Component{

    componentDidMount() {
       this.props.signTC();
       } 

    render(){
        debugger;
        return (
        <div>
            <SignIn form={this.props.form} signTC={this.props.signTC}/>
        </div>)

    }
}

let mapStateToProps=(state)=>{
    return {
        form:state.form,
    }
    
}

export default connect(mapStateToProps,{signTC,setSign})(SignInContainer)