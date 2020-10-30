import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams, withRouter } from 'react-router-dom';
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
    id, category, brand, model, price, description, available, img,
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
      imgSrc={img}
    />
  ));

  return (
    <ProductsWrapper>
      {productId}
      {productsCards}
    </ProductsWrapper>

  );
};

const filterProducts = (products, filter) => {
  switch (filter) {
    case '':
      return products.filter((product) => product);
    case 'tv':
      return products.filter((product) => product.category === 'tv');
    case 'soundbar':
      return products.filter((product) => product.category === 'soundbar');
    case 'smartphone':
      return products.filter((product) => product.category === 'smartphone');
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state, { match }) => ({
  products: filterProducts(
    state.products.products,
    match.params.productId || '',
  ),
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

export default withRouter(connect(mapStateToProps)(Products));
