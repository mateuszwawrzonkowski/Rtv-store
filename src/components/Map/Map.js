import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'leaflet';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import styled from 'styled-components';
import mapMarker from 'assets/map-marker-alt-solid.svg';

const mapMarkerIcon = new Icon({
  iconUrl: mapMarker,
  iconSize: [25, 25],
});

const MapStyled = styled(Map)`
  height: 50vh;
  width: 50vh;
  margin-bottom: 10px;
`;

const MapShops = ({ shops }) => {
  const defaultPosition = [52.229675, 21.012230];

  return (
    <MapStyled center={defaultPosition} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {shops.map(({
        id, lat, lng, adress,
      }) => (
        <Marker key={id} position={[lat, lng]} icon={mapMarkerIcon}>
          <Popup>
            {`${adress}`}
            <br />
            Godziny otwarcia: 8.00-21.00
            <br />
            Pon-sb
          </Popup>
        </Marker>
      ))}
    </MapStyled>
  );
};

const mapStateToProps = (state) => ({
  shops: state.shops.shops,
});

export default connect(mapStateToProps)(MapShops);
