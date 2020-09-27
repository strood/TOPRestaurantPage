"use strict";
import Background from '../img/TribeCharcuterie.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
} from '../components/builders/menus';

const renderSmall = (menuHolder) => {
  console.log("Hey from Small render");
  // Render title on page
  buildMenuTitle("Small Plates");

  // Refresh hero image
  updateHeroPic(Background);

  // Build menu items

  // Append items to page


}

export default renderSmall;
