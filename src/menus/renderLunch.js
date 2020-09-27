"use strict";
import Background from '../img/TribeSalad.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderLunch = (menuHolder) => {
  console.log("Hey from Lunch render");

  // Render title on page
  buildMenuTitle("Lunch");

  // Refresh hero image
  updateHeroPic(Background);

  // Build menu items

  // Build menu columns
  // Append title to column

  // Append items to columns

  // Append columns to page
}

export default renderLunch;
