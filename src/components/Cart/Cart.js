import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CartItem from 'components/CartItem';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;

  h4{
    margin-bottom: 10px;
  }
`;

const Cart = ({ cart }) => {
  const cartItems = cart.map(({
    id, model, brand, price, available, inCart, category,
  }) => <CartItem key={id} id={id} category={category} model={model} brand={brand} price={price} available={available} inCart={inCart} />);

  return (
    <Wrapper>
      <h4>This is your cart</h4>
      {cartItems}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Cart);
