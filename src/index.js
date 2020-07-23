import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Potato from "./potato" // import 해줘야함.

// component는 html을 반환해주는 함수이다.(function App / return)
// <App/>  이를 jsx로 말한다.(javascript+ html) react 에서만 쓰임.

// 한번에 한개의 component만 render할 수 있다. 따라서 다른 component에 집어 넣어서 사용해야함.(ex) potato.js
ReactDOM.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
