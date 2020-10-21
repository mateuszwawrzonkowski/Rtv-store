import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { decreaseProduct, increaseProduct } from 'actions';

const CartWrapper = styled.div`
    height: 168px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    border: 1px solid #DDD;
    font-size: 1.4rem;
`;

const Head = styled.div`
    margin-top: 10px;
    font-size: 1.7rem;
    
`;

const Bottom = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const Button = styled.button`
  height: 35px;
  width: 35px;
  background-color: transparent;
  border: 1px solid #DDD;
`;

const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border: 1px solid #DDD;
`;

const ItemSum = styled.span`
  align-self: flex-start;
  margin-left: 50px;
`;
const Price = styled.span`
  align-self: flex-start;
  padding-right: 10px;
`;
const CartItem = ({
  id, category, model, brand, price, inCart, decrease, increase,
}) => (
  <CartWrapper>
    <Head>
      {`${category.charAt(0).toUpperCase() + category.slice(1)} ${brand} ${model}`}
    </Head>
    <Bottom>
      <Price>
        {`${price} zł`}
      </Price>
      <Button type="submit" onClick={() => decrease(id, inCart)}>-</Button>
      <Amount>{inCart}</Amount>
      <Button type="submit" onClick={() => increase(id, inCart)}>+</Button>
      <ItemSum>
        {`${price * inCart} zł`}
      </ItemSum>
    </Bottom>
  </CartWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  decrease: (id, inCart) => dispatch(decreaseProduct(id, inCart)),
  increase: (id, inCart) => dispatch(increaseProduct(id, inCart)),
});

export default connect(null, mapDispatchToProps)(CartItem);
