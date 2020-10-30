import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

const FilterProductsLink = ({ filter, children }) => {
  const { url } = useRouteMatch();
  return (
    <>
      <LinkStyled
        to={filter === 'products' ? '/products' : `${url}/${filter}`}
        activeStyle={{ borderBottom: '1px solid red' }}
        exact={filter === 'products'}
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
