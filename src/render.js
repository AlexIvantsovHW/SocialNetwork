import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { addPost} from "./redux/state";
import {addMessage,updatePostChange} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree=(state)=>{
  
  root.render(
  
  
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
        addPost={addPost}
        addMessage={addMessage}
        updatePostChange={updatePostChange}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default rerenderEntireTree; 
