"use strict";
import Background from '../img/TribeOffering.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderBig = (menuHolder) => {
  console.log("Hey from Big render");
  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle("Big Plates", "So let’s talk mains; Not only are these dishes" +
    " delicious, but they are also hardy. Our mains change every once in a while, but " +
    " we always use the finest ingredients we can source, favoring local & regional products wherever possible!");

  // Build menu items
  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  let gojChick = buildMenuItem("gochujang chicken", "22", "korean-style chicken with coconut rice, topped with nori & sesame seed, served with kim chi slaw.");
  let macNCheese = buildMenuItem("crab and shrimp mac & cheese", "24", "panko crusted cheesey cavatappi, with crab and shrimp, and a side of arugula salad." +
    " topped with beet-pickled onion, and a slice of house-made buttered bread.");
  let mousaka = buildMenuItem("ouzo mousaka", "23", "sultana raisin beef ragu, roasted eggplant, onion, tomato, bell pepper, garlic, potato, lemon, scented bechamel.");
  let mussels = buildMenuItem("mussels", "24", "one pound of steamed mussels in spicy white wine sauce, served on a bed of wilted spinach with Tribe made rustic bread.");


  // Append items to page
  menuDiv.appendChild(gojChick);
  menuDiv.appendChild(macNCheese);
  menuDiv.appendChild(mousaka);
  menuDiv.appendChild(mussels);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);

}

export default renderBig;
