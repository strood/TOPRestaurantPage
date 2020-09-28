"use strict";
import Background from '../img/TribeDessert.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderSweet = (menuHolder) => {

  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle("Sweet Plates", "At the end of an evening of fabulous story telling " +
    "and love, we’ve got just the right amount of sweetness to top things off. Try a" +
    " coffee and one of our house made desserts.");

  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  // Build menu items
  let chocoCake = buildMenuItem("mashed potato chocolate cake with penuche icing", "9", "seriously, a rich chocolate cake," +
    " with walnuts, and a brown sugar fudge icing.");
  let shortBread = buildMenuItem("cheddar shortbread with spiced apple", "9", "very traditional Scottish shortbread right off the Canada" +
  " Corn Starch box with a very Tribe cheddar twist, served with spiced apple compote.");
  let lemon = buildMenuItem("lemon jar", "9", "when life gives you lemons, tribe gives you lemon cheesecake... and berries");
  let gelato = buildMenuItem("tribe gelato", "9", "we make our gelato in house. ask about our featured flavours. each is paired with an accoutrement... something perfect.");
  let chocoPot = buildMenuItem("ay caramba chocolate pot", "9", "mexican-spiced, rich, creamy, chocolate, with fire dust to warm your cockles.");

  // Append items to page
  menuDiv.appendChild(chocoCake);
  menuDiv.appendChild(shortBread);
  menuDiv.appendChild(lemon);
  menuDiv.appendChild(gelato);
  menuDiv.appendChild(chocoPot);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);

}

export default renderSweet;
