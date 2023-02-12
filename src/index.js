import store from './redux/redux-store'
import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree=(state)=>{ 
  root.render(
  
  
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
        store={store}
        dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerenderEntireTree(store.getState());
store.subscribe(()=>{
  let state=store.getState();
  rerenderEntireTree(state)});
