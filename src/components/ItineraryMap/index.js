import React from "react"
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {Flex, Box} from 'reflexbox'


import styles from "./index.css"
const itinerary = require('./itinerary.json')

const coords = {
  lat: 31.778031,
  lng: 35.235355
};

const params = {v: '3.exp', key: 'AIzaSyAQ38AyTgvhBYPw4rf1ZPcGZxrIpZoQ0sI'};

let currentDate = null;
const itineraryList = itinerary.map((item, index) => {
  const isSameDate = item.date === currentDate;
  currentDate = item.date;
  let markup = null;
  if(isSameDate) {
    markup =
        <li>
          <a href="#" onClick={() => this.jumpTo(index)}>{item.description}</a>
        </li>;
  } else {
      markup = <li>
        <br/><b>{item.date}:</b><br/>
        <a href="#" onClick={() => this.jumpTo(index)}>{item.description}</a>
      </li>;
  }
  return markup;
});

let markerAdded = 0;
const markerList = itinerary.map((item, index) => {
  let markup = null;
  if(item.date === currentDate) {
    markup = null;
  } else {
    markup = <Marker
      label={(markerAdded++) + ""}
      lat={Math.min(item.lat, 33)}
      lng={Math.min(item.lng + 0.95, 35.4)}/>;
  }
  currentDate = item.date;
  return markup;
});

const createCallback = function(map) {
    map.panTo([10.0,31.0]);
}
const ItineraryMap = () => (
  <Flex>
    <Box col={5} pr={2}>
      <ul>
        {itineraryList}
      </ul>
    </Box>
    <Box col={7}>
      <Gmaps
        width={'100%'}
        height={'1200px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={8}
        mapTypeId={'hybrid'}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={createCallback}>
        {markerList}
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}/>
      </Gmaps>
    </Box>
  </Flex>
)

export default ItineraryMap
