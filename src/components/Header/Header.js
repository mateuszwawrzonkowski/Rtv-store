import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import SearchInput from 'components/SearchInput';

const HeaderWrapper = styled.header`
  display: flex;
  padding:10px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  background-color: #fff;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right:20px;
  width: 60px;
  color: #df0000;
  font-size:20px;
  order:2;

  @media(min-width: 574px){
      order:3;
    }
`;

const ShopName = styled.h1`
  font-weight:400;
  margin-left: 5px;
  order:1;
`;
const StyledLink = styled(Link)`
    color:#df0000;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Header = () => (
  <HeaderWrapper>
    <StyledLink to="/">
      <ShopName>RTVMedia</ShopName>
    </StyledLink>
    <IconsWrapper>
      <i className="fas fa-user" />
      <StyledLink to="/cart">
        <i className="fas fa-shopping-cart" />
      </StyledLink>
    </IconsWrapper>
    <SearchInput />
  </HeaderWrapper>
);
export default Header;
