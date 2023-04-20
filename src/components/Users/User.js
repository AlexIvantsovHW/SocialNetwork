import React, { useState } from "react";
import s from "./Style.module.css";

import { NavLink } from "react-router-dom";
import { anonimPhoto } from "../Common/Pictures/Pictures.js";
import { picture } from "../Common/Pictures/Pictures.js";
import { Language } from "../Common/Language/Language";

const User = (props) => {
  let currentLanguage;
  props.Language === "Russian"
    ? (currentLanguage = Language.Russian.Users)
    : (currentLanguage = Language.English.Users);
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
  let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionBoundary = (portionNumber - 1) * portionSize + 1;
  let rightPortionBoundary = portionNumber * portionSize;

  let dispayPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    dispayPages.push(i);
  }

  let userElement = props.UserPage.users.map((el) => {
    return (
      <div className={s.user_container}>
        <div className={s.userImg}>
          <NavLink to={"/profile/" + el.id}>
            <img
              src={el.photos.small === null ? anonimPhoto : el.photos.small}
            />
          </NavLink>
        </div>

        <div className={s.userName}>{`${el.name}`}</div>
        <div className={s.followingImg}>
          {" "}
          {el.followed ? (
            <img
              src={picture.light.unfollow}
              onClick={() => {
                props.unfollow(el.id);
                props.follow(el.id);
              }}
            />
          ) : (
            <img
              src={picture.light.follow}
              onClick={() => {
                props.follow(el.id);
                props.unfollow(el.id);
              }}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className={s.container}>
      <div className={s.top}>{currentLanguage.User}</div>
      <div>
        <div className={s.pageString}>
          {portionNumber > 1 && (
            <div className={s.arrow}>
              <img
                src={picture.light.leftArrow}
                onClick={() => {
                  setPortionNumber(portionNumber - 1);
                }}
              />
            </div>
          )}
          <div>
            {dispayPages
              .filter(
                (p) => p >= leftPortionBoundary && p <= rightPortionBoundary
              )
              .map((p) => {
                return (
                  <span
                    className={s.pageActive}
                    onClick={(e) => props.onPostChange(p)}
                  >
                    {" "}
                    {p}{" "}
                  </span>
                );
              })}
          </div>
          {portionCount > portionNumber && (
            <div className={s.arrow}>
              <img
                src={picture.light.rightArrow}
                className={s.arrow}
                onClick={() => {
                  setPortionNumber(portionNumber + 1);
                }}
              />
            </div>
          )}
        </div>
      </div>

      {userElement}
    </div>
  );
};

export default User;
