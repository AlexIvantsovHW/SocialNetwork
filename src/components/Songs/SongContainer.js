import axios from "axios";
import React from "react";
import { connect } from 'react-redux';

class SongContainer extends React.Component{
componentDidMount(){
    debugger;
    axios.get('https://go-apod.herokuapp.com/apod').then((response)=>{return this.props.imgAC(response.data)})
}

    render(){
        return(
<div>
            hey
        </div>

        )
        

    }
}


let mapStateToProps=(state)=>{
    return{

    }
}
export default connect(mapStateToProps,{})(SongContainer)