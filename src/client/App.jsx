import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductListingPage, ProductDetailsPage, TempPage } from './pages';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={TempPage} />
          <Route path="/product/details/:productId" component={ProductDetailsPage} />
          <Route path="/:parentCategoryId/:categoryId" component={ProductListingPage} />
          <Route path="/:categoryId" render={() => <div>test</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
