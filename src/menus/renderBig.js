"use strict";
import Background from '../img/TribeOffering.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderBig = (menuHolder) => {
  console.log("Hey from Big render");

  // Render title on page
  buildMenuTitle("Big Plates");
  // Refresh hero image
  updateHeroPic(Background);

  // Build menu items

  // Append items to page
}

export default renderBig;
