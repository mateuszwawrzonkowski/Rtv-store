import React from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import GlobalStyle from 'theme/globalStyle';

import {
  Header, Navigation, ProductsMenu, Cart, Shops, Contact, Default,
} from 'components';
import store from 'store';

function App() {
  return (
    <>
      <Provider store={store}>
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
            <Route component={Default} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
