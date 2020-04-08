import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ProductListingPage, ProductDetailsPage, CategoryListingPage, HomePage, SearchResultsPage, CartPage } from './pages';
import './styles/main.scss';

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchResultsPage} />
            <Route path="/product/details/:productId" component={ProductDetailsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/:parentCategoryId/:categoryId" component={ProductListingPage} />
            <Route path="/:categoryId" component={CategoryListingPage} />
          </Switch>
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
