import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  let anonimPhoto = "https://krirpo.ru/wp-content/uploads/2021/11/noname.png";
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
  let dispayPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    dispayPages.push(i);
  }

  let userElement = props.UserPage.users.map((el) => {
    return (
      
      <div>
        <div className={s.container}>
          <div>
            <NavLink to={"/profile/" + el.id}>
              <img
                src={el.photos.small === null ? anonimPhoto : el.photos.small}
                className={s.ava}
              />
            </NavLink>
            <div className={s.name}>{`${el.name} id:${el.id}`}</div>
            {el.followed ? (
              <button
                className={s.button}
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                      {},
                      { withCredentials: true }
                    )
                    .then((response) => {
                      
                        props.follow(el.id);
                      
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={s.button}
                onClick={() => {
                  axios.delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                    { withCredentials: true }
                  );

                  props.unfollow(el.id);
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

        <div>
          {dispayPages.map((p) => {
            return (
              <span
                onClick={(e) => props.onPostChange(p)}
                className={s.activePage}
              >
                {" "}
                {p}{" "}
              </span>
            );
          })}
        </div>
      </div>
      {userElement}
    </div>
  );
};
export default Users;
