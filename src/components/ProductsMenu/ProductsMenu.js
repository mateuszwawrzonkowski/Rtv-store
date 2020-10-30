import React from 'react';
import Products from 'components/Products';
import { FilterProductsLink } from 'components';

import styled from 'styled-components';

import {
  useRouteMatch, Route, Switch,
} from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const MenuWrapper = styled.div`
display: flex;
justify-content: space-around;
flex-grow: 1;
`;

const ProductsMenu = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <FilterProductsLink filter="products">All products</FilterProductsLink>
          <FilterProductsLink filter="tv">TVs</FilterProductsLink>
          <FilterProductsLink filter="soundbar">Soundbars</FilterProductsLink>
          <FilterProductsLink filter="smartphone">Phones</FilterProductsLink>
        </MenuWrapper>
        <Switch>
          <Route path={`${path}/:productId?`}>
            <Products />
          </Route>
        </Switch>
      </Wrapper>
    </>

  );
};

export default ProductsMenu;
