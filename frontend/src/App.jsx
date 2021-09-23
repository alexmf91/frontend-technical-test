import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Details from './views/Details';
import Home from './views/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:gnomeId" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
