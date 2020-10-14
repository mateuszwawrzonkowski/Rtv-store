import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const LinkStyled = styled(Link)`
    color: #000;
    text-transform: capitalize;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    
    &:hover{
      color: #DF0000;
      border-bottom: 2px solid #DF0000;
    }
`;

const Navigation = () => (
  <>
    <NavigationWrapper>
      <LinkStyled to="/products">
        <div>
          <i className="fas fa-bars" style={{ margin: '0 5px 0 0' }} />
          products
        </div>
      </LinkStyled>
      <LinkStyled to="/shops">
        shops
      </LinkStyled>
      <LinkStyled to="/contact">
        contact
      </LinkStyled>
    </NavigationWrapper>
  </>
);

export default Navigation;
