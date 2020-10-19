import React from 'react';
import { connect } from 'react-redux';

import Map from 'components/Map';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faClock } from '@fortawesome/free-solid-svg-icons';

const ShopsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ShopsList = styled.ul`
    min-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    li{
      background-color: #EEE;
      /* margin: 10px; */
      padding: 10px;

      p{
        margin: 5px 0;
      }
    }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const IconStyled = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #df0000;
`;
const Shops = ({ shops }) => (
  <>
    <ShopsWrapper>
      <Map />
      <ShopsList>
        {shops.map(({
          id, name, adress, openHours,
        }) => (
          <li key={id}>
            <h3>
              {name}
            </h3>
            <Info>
              <IconStyled icon={faMap} />
              <p>
                {adress}
              </p>
            </Info>
            <Info>
              <IconStyled icon={faClock} />
              <p>
                {openHours}
              </p>
            </Info>
          </li>
        ))}
      </ShopsList>
    </ShopsWrapper>
  </>
);

const mapStateToProps = (state) => ({
  shops: state.shops.shops,
});

export default connect(mapStateToProps)(Shops);
