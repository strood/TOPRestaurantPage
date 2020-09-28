"use strict";
import Background from '../img/TribeCoffee.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderCoffee = (menuHolder) => {

  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle("Coffee", "Sit back, take a load off, sip on one of the classics.");

  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  // Build menu items
  let americano = buildMenuItem("americano", "3", "basically coffee, espresso and water.");
  let espresso = buildMenuItem("espresso", "3", "strong coffee, tiny cup.");
  let latte = buildMenuItem("latte", "5", "one long espresso shot, in a tall cup with steamed milk.");
  let cappuccino =buildMenuItem("cappuccino", "5", "one long espresso shot, in a short cup with steamed milk and microfoam.");
  let teaLatte = buildMenuItem("tea latte", "5", "tea, in a tall cup with steamed milk.");
  let slowCof = buildMenuItem("slow coffee", "8", "pour-over, slow coffe, fit for two.");
  let mocha = buildMenuItem("caffee mocha", "5", "latte with chocolate");

  // Append items to page
  menuDiv.appendChild(americano);
  menuDiv.appendChild(espresso);
  menuDiv.appendChild(latte);
  menuDiv.appendChild(cappuccino);
  menuDiv.appendChild(teaLatte);
  menuDiv.appendChild(slowCof);
  menuDiv.appendChild(mocha);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);
}

export default renderCoffee;
