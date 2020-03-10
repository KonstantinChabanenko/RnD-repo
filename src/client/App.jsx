import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductListingPage, ProductDetailsPageV2, CategoryListingPage, HomePage, SearchResultsPage } from './pages';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchResultsPage} />
          <Route path="/product/:productId" component={ProductDetailsPageV2} />
          {/* <Route path="/product/details/:productId" component={ProductDetailsPage} /> */}
          <Route path="/:parentCategoryId/:categoryId" component={ProductListingPage} />
          <Route path="/:categoryId" component={CategoryListingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
