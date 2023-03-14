import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile,profileTC } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileAPI extends React.Component {
  componentDidMount() { let profileId = this.props.router.params.id; this.props.profileTC(profileId);}
  render() {return (<div><Profile {...this.props} Profile={this.props.Profile}/></div>);}
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {return {Profile: state.profilePage.Profile};};
const ProfileContainer = connect(mapStateToProps, { setProfile,profileTC })(withRouter(ProfileAPI));

export default ProfileContainer;
