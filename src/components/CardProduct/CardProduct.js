import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from 'actions';

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
  id, category, brand, model, price, description, available, addToCart,
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
      <AddToCartButton onClick={() => addToCart(id, category, brand, model, price, description)} disabled={!available}>
        Add to cart
      </AddToCartButton>
    </DescriptionWrapper>
  </ProductCardWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, category, brand, model, price, description) => dispatch(addToCart(id, category, brand, model, price, description)),
});

export default connect(null, mapDispatchToProps)(CardProduct);
