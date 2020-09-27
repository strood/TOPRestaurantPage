"use strict";
import Background from '../img/TribeCoffee.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderCoffee = (menuHolder) => {
  console.log("Hey from coffee render");

  // Render title on page
  buildMenuTitle("Coffee");

  // Refresh hero image
  updateHeroPic(Background);
  // Build menu items

  // Append items to page
}

export default renderCoffee;
