import React from "react";
import { connect } from "react-redux";
import { getLang, getNews } from "../../selectors/selectors";
import { newsTC } from "../../redux/news-reducer";
import News from "./News";
import axios from "axios";
import { newsAC } from './../../redux/news-reducer';


class NewsContainer extends React.Component{
    
    componentDidMount() {
        axios
        .get('https://api.spaceflightnewsapi.net/v3/articles')
        .then((response) => {
            return this.props.newsAC(response.data)});
        }

        componentDidUpdate(prevProps,prevState){
            if (this.props.News!== prevProps.News) {
              this.setState(this.props.News);
            }
          }
    
      render() {
        return (
      <News news={this.props.News} Language={this.props.Language}/>
)}}


const mapStateToProps=(state)=>{
    return{
        News:getNews(state),
        Language: getLang(state)
    }
}
export default connect (mapStateToProps,{newsTC,newsAC})(NewsContainer)