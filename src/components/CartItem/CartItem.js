import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { decreaseProduct, increaseProduct, removeFromCart } from 'actions';
import PropTypes from 'prop-types';

const CartWrapper = styled.div`
    position: relative;
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 290px;
    border: 1px solid #DDD;
    font-size: 1.4rem;
    margin-bottom: 20px;
    background-color: white;
`;

const Head = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    height: 80px;
`;

const Image = styled.img`
    max-width: 72px;
    max-height: 60px;
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
  align-self: center;
  margin-left: 50px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  height: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  div{
    height:15px;
    width:2px;
    background-color:#df0000;
    transform: rotate(45deg);
 
    :after{
      content:'';
      position: absolute;
      background-color:#df0000;
      height: 15px;
      width: 2px;
      transform: translate(-50%) rotate(90deg);
    }
  }
`;

const CartItem = ({
  id, category, model, brand, price, inCart, decrease, increase, removeFromCart,
  imgSrc,
}) => (
  <CartWrapper>
    <Head>
      <Image src={imgSrc} />
      <p>
        {`${category.charAt(0).toUpperCase() + category.slice(1)} ${brand} ${model}`}
      </p>
    </Head>
    <RemoveButton onClick={() => removeFromCart(id, inCart)}>
      <div />
    </RemoveButton>
    <Bottom>
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
  removeFromCart: (id, inCart) => dispatch(removeFromCart(id, inCart)),
});

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  inCart: PropTypes.number.isRequired,
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CartItem);
