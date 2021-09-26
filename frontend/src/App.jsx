import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Details from './views/Details';
import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:gnomeId" component={Details} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
