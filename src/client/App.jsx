import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductTile from "./components/ProductTile/ProductTile";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product-tile" component={ProductTile} />
      </Switch>
    </Router>
  );
}

export default App;
