import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const CartIcon = styled.div`
  position: relative;

  div{
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 100%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background-color: #df0000;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
const Header = ({ cartAmount }) => (
  <HeaderWrapper>
    <StyledLink to="/">
      <ShopName>RTVMedia</ShopName>
    </StyledLink>
    <IconsWrapper>
      <i className="fas fa-user" />
      <StyledLink to="/cart">
        { cartAmount > 0 && (
          <CartIcon>
            <div>
              {cartAmount}
            </div>
          </CartIcon>
        )}
        <i className="fas fa-shopping-cart" />
      </StyledLink>
    </IconsWrapper>
    <SearchInput />
  </HeaderWrapper>
);

const mapStateToProps = (state) => ({
  cartAmount: state.products.cartAmount,
});

export default connect(mapStateToProps)(Header);
