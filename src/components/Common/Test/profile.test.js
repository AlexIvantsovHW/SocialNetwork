

import profileReducer from "../../../redux/profile-reducer";
import { addPostActionCreator } from '../../../redux/profile-reducer';
import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { deletePostAC } from './../../../redux/profile-reducer';

let state={
  userList: [
  { id: 1, name: "Alex", message: "Hey man!" },
  { id: 2, name: "Inna", message: "Hey man!" },
  { id: 3, name: "Alina", message: "Hey man!" },
  { id: 4, name: "Jastin", message: "Hey man!" },
],
}

it (' State should be increased',()=>{
let action=addPostActionCreator('It is your first test');
let newState=profileReducer(state,action);
expect(newState.userList.length).toBe(5);
})

it ('Message of new post must be correct',()=>{
  let action=addPostActionCreator('It is your first test');
  let newState=profileReducer(state,action);
  expect(newState.userList[4].message).toBe('It is your first test');
  })

  it ('Input data must be string',()=>{
    let action=addPostActionCreator('It is your first test');
    let newState=profileReducer(state,action);
    expect(typeof(newState.userList[4].message)).toBe('string');
    })

  it('Message length must be reduced',()=>{
    let action=deletePostAC();
    let newState=profileReducer(state,action);
    expect(state.userList.length).toBe(3)

  })  