import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const links = [
  {
    title: 'products',
    to: '/products',
  },
  {
    title: 'shops',
    to: '/shops',
  },
  {
    title: 'contact',
    to: '/contact',
  },
];

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const LinkStyled = styled(NavLink)`
    color: #000;
    text-transform: capitalize;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;
`;

const NavLinks = links.map((link) => (
  link.to === '/products'
    ? (
      <LinkStyled
        key={link.title}
        to={link.to}
        activeStyle={{
          color: '#DF0000',
          borderBottom: ' 2px solid #DF0000',
        }}
      >
        <div>
          <i className="fas fa-bars" style={{ margin: '0 5px 0 0' }} />
          {link.title}
        </div>
      </LinkStyled>
    )
    : (
      <LinkStyled
        key={link.title}
        to={link.to}
        activeStyle={{
          color: '#DF0000',
          borderBottom: ' 2px solid #DF0000',
        }}
      >
        {link.title}
      </LinkStyled>
    )
));

const Navigation = () => (
  <>
    <NavigationWrapper>
      {NavLinks}
    </NavigationWrapper>
  </>
);

export default Navigation;
