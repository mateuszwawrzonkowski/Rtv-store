import React from 'react';
import { Icon } from 'leaflet';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import styled from 'styled-components';
import mapMarker from 'assets/map-marker-alt-solid.svg';

const locations = [
  {
    id: 1,
    lat: 52.229675,
    lng: 21.012230,
    zoom: 13,
    adress: 'Bolesława 5/3, 02-987',
  },
  {
    id: 2,
    lat: 52.220859,
    lng: 20.961601,
    zoom: 13,
    adress: 'Krzysztofa Bohatera 28, 01-923',
  },
  {
    id: 3,
    lat: 52.206660,
    lng: 21.031155,
    zoom: 13,
    adress: 'Jozefa 1, 02-967',
  },
  {
    id: 4,
    lat: 52.156663,
    lng: 20.993764,
    zoom: 13,
    adress: 'Marlona 82, 01-927',
  },
];

const icon = new Icon({
  iconUrl: mapMarker,
  iconSize: [25, 25],
});

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MapStyled = styled(Map)`
  height: 50vh;
  width: 50vh;
`;

const MapShops = () => {
  const defaultPosition = [52.229675, 21.012230];

  return (
    <MapWrapper>
      <MapStyled center={defaultPosition} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]} icon={icon}>
            <Popup>
              {`${location.adress}`}
              <br />
              Godziny otwarcia: 8.00-21.00
              <br />
              Pon-sb
            </Popup>
          </Marker>
        ))}
      </MapStyled>

    </MapWrapper>
  );
};

export default MapShops;
