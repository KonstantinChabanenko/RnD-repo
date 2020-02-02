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
          <Route path="/:cat_lv1/:cat_lv2/:cat_lv3" component={ProductListingPage} />
          <Route path="/:cat_lv1" />
          <Route path="/:cat_lv1/:cat_lv2" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
