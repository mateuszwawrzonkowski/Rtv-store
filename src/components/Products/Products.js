import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductsWrapper = styled.div`

`;

const Products = ({ products }) => {
  const { productId } = useParams();

  const productsCards = products.map((product) => <div key={product.id}>product</div>);

  return (
    <ProductsWrapper>
      {productId}
      {productsCards}
    </ProductsWrapper>

  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(Products);
