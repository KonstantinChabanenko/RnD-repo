import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductListingPage, ProductDetailsPage } from './pages';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={TempPage} />
          <Route path="/categories/:categoryId" component={ProductListingPage} />
          <Route path="/product/details/:productId" component={ProductDetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
