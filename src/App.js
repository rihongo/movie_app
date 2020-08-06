import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function App(){
  return (
      <HashRouter>
        <Navigation />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/movie/:id" component={Detail}/>
      </HashRouter>
  )
}

export default App;