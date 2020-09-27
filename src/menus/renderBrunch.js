"use strict";
import Background from '../img/TribeSkewers.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderBrunch = (menuHolder) => {
  console.log("Hey from Brunch render")

  // Render title on page
  buildMenuTitle("Brunch");

  // Refresh hero image
  updateHeroPic(Background);

  // Build menu items

  // Append items to page
}

export default renderBrunch;
