import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "../../redux/profile-reducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import API from "../../API";


class ProfileAPI extends React.Component {
  
  componentDidMount() {
    debugger;
    let profileId = this.props.router.params.id;
    API.getProfile(profileId).then((data)=>(this.props.setProfile(data)))}


    /* axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/"+profileId)
      .then((response) => {
        this.props.setProfile(response.data);
      });
 */ 

  render() {
    return (
      <div>
        <Profile {...this.props} Profile={this.props.Profile} />
      </div>
    );
  }
}



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}







const mapStateToProps = (state) => {
  return {
    Profile: state.profilePage.Profile,
    
  };
};



const ProfileContainer = connect(mapStateToProps, { setProfile })(withRouter(ProfileAPI));

export default ProfileContainer;
