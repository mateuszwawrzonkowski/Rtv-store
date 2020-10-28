import React from 'react';

import styled from 'styled-components';
import searchIcon from 'assets/icons/search-solid.svg';

const Input = styled.input`
    flex-basis: 95%;
    max-width: 360px;
    margin: 0 auto;
    padding: 10px 20px 10px 50px;
    /* margin: 24px 0 16px 0; */
    font-size: 1.6rem;
    font-weight: 400;
    background-color: transparent;
    color: #df0000;
    border-radius: 5px;
    border: 1px solid #555;
    background-image: url(${searchIcon});
    background-size:25px;
    background-position:15px 50%;
    background-repeat:no-repeat;
    order: 3;

    @media(min-width: 574px){
      order:2;
    }

    ::placeholder{
      text-transform: uppercase;
      font-size: 1.6rem;
      color: white;
      letter-spacing: 1px;
    }
    :focus{
        outline: none;
    }
    :focus::placeholder {
     color: transparent;
    }
`;

const SearchInput = () => (
  <Input placeholder="search" />
);

export default SearchInput;
