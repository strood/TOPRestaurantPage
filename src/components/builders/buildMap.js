"use strict";

import {
  buildArticleCard,
} from '../article';
import {
  colorPicker,
} from '../colors';

const buildMap = (content) => {
  let mapCard = buildArticleCard("", "", colorPicker(4));
  // let holder = document.createElement('div');
  // var uluru = {lat: -25.344, lng: 131.036};
  // // The map, centered at Uluru
  // var map = new google.maps.Map(
  //     document.getElementById('map'), {zoom: 4, center: uluru});
  // // The marker, positioned at Uluru
  // var marker = new google.maps.Marker({position: uluru, map: map});
  content.appendChild(mapCard);
}

export default buildMap;
