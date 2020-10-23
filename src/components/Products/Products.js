import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardProduct from 'components/CardProduct';

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const Products = ({ products }) => {
  const { productId } = useParams();

  const productsCards = products.map(({
    id, category, brand, model, price, description, available,
  }) => (
    <CardProduct
      key={id}
      id={id}
      category={category}
      brand={brand}
      model={model}
      price={price}
      description={description}
      available={available}
    />
  ));

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

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    available: PropTypes.number,
  })),
};

Products.defaultProps = {
  products: [],
};

export default connect(mapStateToProps)(Products);
