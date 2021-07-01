import React from 'react';
import Home from './Component/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shop from './Component/Shop';
import Cart from './Component/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
