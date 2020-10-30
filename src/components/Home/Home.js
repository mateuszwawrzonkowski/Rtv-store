import React from 'react';
import styled from 'styled-components';
import { promotion1 } from 'assets';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  img{
    width: 100%;
    max-height: 480px;
    max-width: 400px;
    background-size: cover;
  }
`;

const Home = () => (
  <Wrapper>
    <img src={promotion1} alt="promotion" />
  </Wrapper>
);

export default Home;
