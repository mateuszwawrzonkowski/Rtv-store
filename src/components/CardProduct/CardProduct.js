import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  flex-grow: 1;
  width: 95%;
  margin: 10px;
  background-color:white;
  border: 1px solid #E9E9E9;
  box-shadow: 0 2px 3px rgba(0,0,0,0.07);
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  height:150px;
  width: 150px;
  background-color: white;
  margin: 5px 0;
  img{
    width: 100%;
  }
`;
const SpecificationWrapper = styled.div`
  display: flex;
  flex-direction:column;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Price = styled.h2`
  font-size: 3rem;
  align-self: center;
`;
const ListElement = styled.li`
  &::before{
    content: "• ";
    color: red;
  }
`;
const AddToCartButton = styled.button`
  background-color: black;
  color:white;
  border: none;
  height: 25px;
  border-radius: 5px;
  margin: 10px 0;
`;

const CardProduct = ({
  id, category, brand, model, price, description, available, addToCart, imgSrc,
}) => (
  <ProductCardWrapper>
    <ImageWrapper>
      <img src={imgSrc} alt="" />
    </ImageWrapper>
    <DescriptionWrapper>
      <SpecificationWrapper>
        <Price>
          {`${price} zł`}
        </Price>
        <ul style={{ listStyle: 'none' }}>
          <ListElement>
            Brand:
            {' '}
            {brand}
          </ListElement>
          <ListElement>
            Model:
            {' '}
            {model}
          </ListElement>
          <ListElement>
            Description:
            {' '}
            {description}
          </ListElement>
          <ListElement style={{ color: available < 1 && '#555' }}>
            Stock:
            {' '}
            {available || 'available soon'}
          </ListElement>
        </ul>
      </SpecificationWrapper>
      <AddToCartButton
        onClick={() => addToCart(id, category, brand, model, price, description, available, imgSrc)}
        disabled={!available}
      >
        Add to cart
      </AddToCartButton>
    </DescriptionWrapper>
  </ProductCardWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, category, brand, model, price, description, available, img) => dispatch(addToCart(
    id, category, brand, model, price, description, available, img,
  )),
});

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string,
  description: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

CardProduct.defaultProps = {
  imgSrc: '',
};

export default connect(null, mapDispatchToProps)(CardProduct);
