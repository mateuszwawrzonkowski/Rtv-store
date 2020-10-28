import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    id, model, brand, price, available, inCart, category, img,
  }) => (
    <CartItem
      key={id}
      id={id}
      category={category}
      model={model}
      brand={brand}
      price={price}
      available={available}
      inCart={inCart}
      imgSrc={img}
    />
  ));

  return (
    <Wrapper>
      <h4>This is your cart </h4>
      {cartItems.length > 0
        ? cartItems
        : <p>&nbsp;and it`s empty. Change it fast!</p> }
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.number,
    inCart: PropTypes.number,
    category: PropTypes.string,
  })),
};

Cart.defaultProps = {
  cart: [],
};

export default connect(mapStateToProps)(Cart);
