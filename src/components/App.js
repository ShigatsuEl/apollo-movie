import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
