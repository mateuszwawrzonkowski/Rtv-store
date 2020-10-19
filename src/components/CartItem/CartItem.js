import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { decreaseProduct, increaseProduct } from 'actions';

import * as actionType from 'actions/actionTypes';

const CartWrapper = styled.div`
    height: 168px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: 1px solid #DDD;
    font-size: 1.4rem;
`;

const Head = styled.div`
    
`;

const Bottom = styled.div`
    
`;
const CartItem = ({
  id, category, model, brand, price, available, inCart, decrease, increase,
}) => (
  <CartWrapper>
    <Head>
      {`${category.charAt(0).toUpperCase() + category.slice(1)} ${brand} ${model}`}
    </Head>
    <Bottom>
      {price}
      <button onClick={() => decrease(id, inCart)}>-</button>
      <button>{inCart}</button>
      <button onClick={() => increase(id, inCart)}>+</button>
    </Bottom>
  </CartWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  decrease: (id, inCart) => dispatch(decreaseProduct(id, inCart)),
  increase: (id, inCart) => dispatch(increaseProduct(id, inCart)),
});

export default connect(null, mapDispatchToProps)(CartItem);
