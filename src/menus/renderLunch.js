"use strict";
import Background from '../img/TribeSalad.jpg';
import {
  updateHeroPic
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderLunch = (menuHolder) => {

  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle("Lunch", "Yes, we are now open for lunch at 11:30a.m, Tuesday through Sunday");

  // holder for menu items, so we can adjust independent from title.
  // Lunch is different form all other pages as we have 3 titles and 3 boxes,
  // alongside our main title. Other pages just have main title one box

  // Starters box
  const startDiv = document.createElement('div');
  startDiv.setAttribute('class', 'lunch-menu-div');
  let startTitle = document.createElement('h3');
  startTitle.innerHTML = "starters";
  startDiv.appendChild(startTitle);

  // Entrees box
  const entreeDiv = document.createElement('div');
  entreeDiv.setAttribute('class', 'lunch-menu-div');
  let entreeTitle = document.createElement('h3');
  entreeTitle.innerHTML = "entrees";
  entreeDiv.appendChild(entreeTitle);

  // Flatplates box
  const flatDiv = document.createElement('div');
  flatDiv.setAttribute('class', 'lunch-menu-div');
  let flatTitle = document.createElement('h3');
  flatTitle.innerHTML = "flat plates";
  flatDiv.appendChild(flatTitle);

  // Build menu items
  // starters
  let rocketSalad = buildMenuItem("rocket salad", "9", "arugula, with ginger lemon dressing." +
    " topped with beet, dill infused pickled onions.");
  let zuppa = buildMenuItem("zuppa", "7", "chef alex and team knock it out of the park, with tribe's hand-crafted soup." +
    " Inspired by flavours from around the world.");
  let ldEggs = buildMenuItem("lemon devilled eggs", "9", "tarragon cream cheese stuffed eggs," +
    " with shaved sharp cheese, on a bed of arugula, with ginger lemon dressing.");
  let tribeSalad = buildMenuItem("tribe salad", "13", "cantaloupe, cucumber, tomato, goat cheese," +
    " nuts, kalamata olives, lime, cilantro, red onion.", ["add proscuitto $3"]);
  let bread = buildMenuItem("bread", "4", "freshly baked bread, accopanied with compound butter.");

  // entrees
  let proscuittoSalmon = buildMenuItem("proscuitto salmon", "18", "prosciutto-wrapped salmon filet; " +
    "oven-baked with garlic butter, and topped with warm sambuca tomato sauce.");
  let bahnMi = buildMenuItem("banh mi monte cristo", "16", "gochujang chicken, prosciutto, swiss, carrots, " +
    "strings, cilantro and candied peanut, strawberry preserve.");
  let theBurger = buildMenuItem("the burger", "17", "6 oz sous vide Alberta beef patty, " +
    "rockets, tomato, confit garlic aioli, maitre d'hôtel butter, dill infused pickled onions.");
  let macNCheese = buildMenuItem("crab and shrimp mac & cheese", "24", "panko crusted cheesey cavatappi, with crab and shrimp, and a side of arugula salad." +
    " topped with beet-pickled onion, and a slice of house-made buttered bread.");

  // flat plates
  let marrakesh = buildMenuItem("marrakesh", "18", "moroccan-spiced chicken, roasted garlic, " +
    "turmeric yogurt, caramelized onion, goat cheese, green olive, roasted lemon, honey drizzle.");
  let sprout = buildMenuItem("sprout", "14", "shreaded brussel sprouts, carmelized onion, " +
    "goat cheese, drizzle of rich balsamic glaze.");
  let snapDres = buildMenuItem("snappy dresser", "18", "italian sausage, green pepper, mushroom," +
    " onion, mozzarella, tomato basil sauce.");
  let saltLick = buildMenuItem("salt lick", "12", "caramelized onion, tapenade, capers, mozzarella.", ["add proscuitto $3"]);

  // starter div
  let sHolder = document.createElement('div');
  sHolder.setAttribute('class', "lunch-item-holder");

  sHolder.appendChild(rocketSalad);
  sHolder.appendChild(zuppa);
  sHolder.appendChild(ldEggs);
  sHolder.appendChild(tribeSalad);
  sHolder.appendChild(bread);

  startDiv.appendChild(sHolder);

  // entree div
  let eHolder = document.createElement('div');
  eHolder.setAttribute('class', "lunch-item-holder");

  eHolder.appendChild(proscuittoSalmon);
  eHolder.appendChild(bahnMi);
  eHolder.appendChild(theBurger);
  eHolder.appendChild(macNCheese);

  entreeDiv.appendChild(eHolder);

  // flat div
  let fHolder = document.createElement('div');
  fHolder.setAttribute('class', "lunch-item-holder");

  fHolder.appendChild(marrakesh);
  fHolder.appendChild(sprout);
  fHolder.appendChild(snapDres);
  fHolder.appendChild(saltLick);

  flatDiv.appendChild(fHolder);


  // Add our divs to holder with breaks
  menuHolder.appendChild(startDiv);
  menuHolder.appendChild(document.createElement('hr'));
  menuHolder.appendChild(entreeDiv);
  menuHolder.appendChild(document.createElement('hr'));
  menuHolder.appendChild(flatDiv);

}

export default renderLunch;
