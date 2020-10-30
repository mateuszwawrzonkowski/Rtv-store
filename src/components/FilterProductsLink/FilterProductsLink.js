import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;

const FilterProductsLink = ({ filter, children }) => {
  const { url } = useRouteMatch();
  return (
    <>
      <LinkStyled
        to={filter === 'products' ? '/products' : `${url}/${filter}`}
      >
        {children}
      </LinkStyled>
    </>
  );
};

FilterProductsLink.propTypes = {
  filter: PropTypes.oneOf(['products', 'tv', 'soundbar', 'smartphone']).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterProductsLink;
