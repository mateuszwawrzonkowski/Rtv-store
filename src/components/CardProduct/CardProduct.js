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
  /* padding: 10px; */
  margin: 10px;
`;
const ImageWrapper = styled.div`
  height:150px;
  width: 150px;
  background-color: gray;
  /* margin-right: 10px; */
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
`;

const CardProduct = ({
  id, category, model, price, description, available, addToCart,
}) => (
  <ProductCardWrapper>
    <ImageWrapper>
      <img src="" alt="" />
    </ImageWrapper>
    <DescriptionWrapper>
      <SpecificationWrapper>
        <Price>
          {`${price} zł`}
        </Price>
        <ul style={{ listStyle: 'none' }}>
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
      <AddToCartButton onClick={() => addToCart(id, category)} disabled={!available}>
        Add to cart
      </AddToCartButton>
    </DescriptionWrapper>
  </ProductCardWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, category) => dispatch(addToCart(id, category)),
});

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CardProduct);
