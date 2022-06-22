import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Index from "./pages/Freelances";

import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
// import { createGlobalStyle } from "styled-components";


// const globalStyles = createGlobalStyle`
//   div {
//     font-family: 'Trebuchet MS', Helvetica, sans-serif;
//   }
//
// `;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    {/*<globalStyles />*/}
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey/:questionNumber">
        <Survey />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
      <Route path="/freelances">
        <Index />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
