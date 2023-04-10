import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile,profileTC,setStatus,setAvaTC } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { statusTC } from './../../redux/profile-reducer';
import { compose } from 'redux';
import { getLang, getProfile, getStatus } from "../../selectors/selectors";





class ProfileAPI extends React.Component {
  
  componentDidMount() {
     let profileId = this.props.router.params.id;
      this.props.profileTC(profileId);
    this.props.statusTC(profileId);
    }

    componentDidUpdate(prevProps,prevState){
      if (this.props.Profile!== prevProps.Profile) {
        this.setState(this.props.Profile);
      }
    }
    
  render() {
    return (<div><Profile {...this.props} Profile={this.props.Profile} 
      status={this.props.status} Language={this.props.Language} updateStatus={this.props.setStatus} /></div>);}
}

export var withRouter=function (Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
;

const mapStateToProps = (state) => { return {Profile: getProfile(state),status:getStatus(state),Language: getLang(state)};};

export default compose(withRouter,
  connect(mapStateToProps, { setProfile,profileTC,statusTC,setStatus, setAvaTC}),
  )(ProfileAPI);



