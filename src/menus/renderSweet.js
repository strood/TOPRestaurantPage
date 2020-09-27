"use strict";
import Background from '../img/TribeDessert.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderSweet = (menuHolder) => {
  console.log("Hey from Sweet render");

  // Render title on page
  buildMenuTitle("Sweet Plates");

  // Refresh hero image
  updateHeroPic(Background);
  // Build menu items

  // Append items to page
}

export default renderSweet;
