import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductsWrapper = styled.div`

`;

const Products = () => {
  const { productId } = useParams();

  return (
    <ProductsWrapper>
      {productId}
    </ProductsWrapper>

  );
};

export default Products;
