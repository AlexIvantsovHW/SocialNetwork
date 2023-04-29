import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setMusic } from "../../redux/music-reducer";



class SongContainer extends React.Component {
  componentDidMount() {
    debugger;
axios.get('https://api.deezer.com/user/2529/playlists')
.then((response)=>{debugger;return response.data});
      
  }

  render() {
    return (
      <>
        <Song {...this.props} />
      </>
    );
  }
}

const Song=(props)=>{
    return(
        <div>
            <div>
                hey
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {setMusic})(SongContainer);
