import React from "react";
import s from "./Users.module.css";
import axios from "axios";

let anonimPhoto='https://krirpo.ru/wp-content/uploads/2021/11/noname.png';

class Users extends React.Component {
  
  componentDidMount() {
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.SetUsers(response.data.items);
      });
  }
  
  onPostChange=(p)=>{
    this.props.activePage(p)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.SetUsers(response.data.items);})
  }
  render() {
    let pagesCount=Math.ceil(this.props.totalUsers/this.props.pageSize);
    let dispayPages=[];
    for (let i=1;i<=pagesCount;i++){dispayPages.push(i)};


    let userElement = this.props.UserPage.users.map((el) => {
      return (
        <div>
          <div className={s.container}>
            <div>
              <img src={el.photos.small===null?anonimPhoto:el.photos.small} className={s.ava} />
              <div className={s.name}>{el.name}</div>
              {el.followed ? (
                <button
                  className={s.button}
                  onClick={() => {
                    this.props.Follow(el.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.button}
                  onClick={() => {
                    this.props.Unfollow(el.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <div className={s.status}>{el.status}</div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <div className={s.top}>
            <div>USER</div>
            <div>STATUS</div>
            <div>LOCATION</div>
          </div>
        
          <div>{dispayPages.map((p)=>{return(<span  onClick={(e)=>this.onPostChange(p)} className={s.activePage}> {p} </span>)})}</div>
        </div>
        {userElement}
      </div>
    );
  }
}

export default Users;
