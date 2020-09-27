"use strict";
import Background from '../img/TribePizza2.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderFlat = (menuHolder) => {
  console.log("Hey from Flat render");

  // Render title on page
  buildMenuTitle("Flat Plates");

  // Refresh hero image
  updateHeroPic(Background);
  // Build menu items

  // Append items to page
}

export default renderFlat;
