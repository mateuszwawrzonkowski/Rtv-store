import React from 'react';
import styled from 'styled-components';

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
  category, model, price, description, available,
}) => (
  <ProductCardWrapper>
    <ImageWrapper>
      <img src="" alt="" />
    </ImageWrapper>
    <DescriptionWrapper>
      <SpecificationWrapper>
        <Price>
          {price}
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
      <AddToCartButton disabled={!available}>
        Add to cart
      </AddToCartButton>
    </DescriptionWrapper>

  </ProductCardWrapper>
);

export default CardProduct;
