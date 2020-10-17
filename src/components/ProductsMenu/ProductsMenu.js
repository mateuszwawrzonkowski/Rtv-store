import React from 'react';
import Products from 'components/Products';

import styled from 'styled-components';

import {
  Link, useRouteMatch, Route, Switch,
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

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ProductsMenu = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <LinkStyled to="/products">All products</LinkStyled>
          <LinkStyled to="/products/tv">TVs</LinkStyled>
          <LinkStyled to="/products/soundbars">Soundbars</LinkStyled>
          <LinkStyled to={`${url}/phones`}>Phones</LinkStyled>
        </MenuWrapper>
        <Switch>
          <Route exact path={path}>
            <Products />
          </Route>
          <Route path={`${path}/:productId`}>
            <Products />
          </Route>
        </Switch>
      </Wrapper>
    </>

  );
};

export default ProductsMenu;
