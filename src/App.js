import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'theme/globalStyle';

import {
  Header, Navigation, ProductsMenu, Cart, Shops, Contact, Default,
} from 'components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={ProductsMenu} />
          <Route path="/products" component={ProductsMenu} />
          <Route path="/cart" component={Cart} />
          <Route path="/shops" component={Shops} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
