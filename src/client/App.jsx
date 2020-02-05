import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductListingPage } from './pages';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route path="/categories/:categoryId" component={ProductListingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
