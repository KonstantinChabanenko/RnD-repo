import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductListingPage } from './pages';
import TempPage  from './pages/TempPage';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={TempPage} />
          <Route path="/categories/:categoryId" component={ProductListingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
