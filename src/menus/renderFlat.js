import Background from '../img/TribeZa.jpg';
import {
  updateHeroPic,
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderFlat = (menuHolder) => {
  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle('Flat Plates', 'The secret is in our flakey, house made crust.'
  + ' Atop it sits a flavorful array of mouthwatering toppings, baked to perfection.');

  // Build menu items
  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  const snapDres = buildMenuItem('snappy dresser', '18', 'italian sausage, green pepper, mushroom,'
  + ' onion, mozzarella, tomato basil sauce.');
  const ecMac = buildMenuItem('east coast mac', '18', 'shrimp and crab mac and cheese, topped with even more cheese!');
  const sprout = buildMenuItem('sprout', '14', 'shreaded brussel sprouts, carmelized onion, '
  + 'goat cheese, drizzle of rich balsamic glaze.');
  const fungFrom = buildMenuItem('fungi and fromage', '17', 'cremini and portobello mushrooms, smoked gouda and asagio.');
  const rustico = buildMenuItem('rustico', '12', 'mozzarella, arugula, basil, tomato basil sauce.');
  const seoul = buildMenuItem('seoul serching', '18', 'gochujang chicken, kimchi, mozza.');
  const freeLove = buildMenuItem('free love', '18', 'proscuitto, goat cheese, salty nuts, pickled dill onions and fig jam.');
  const marrakesh = buildMenuItem('marrakesh', '18', 'moroccan-spiced chicken, roasted garlic, '
    + 'turmeric yogurt, caramelized onion, goat cheese, green olive, roasted lemon, honey drizzle.');
  const saltLick = buildMenuItem('salt lick', '12', 'caramelized onion, tapenade, capers, mozzarella.', ['add proscuitto $3']);
  const copenhag = buildMenuItem('copenhagen', '15', 'thinly sliced potato, smoked cheddar, proscuitto');

  // Append items to page
  menuDiv.appendChild(snapDres);
  menuDiv.appendChild(ecMac);
  menuDiv.appendChild(sprout);
  menuDiv.appendChild(fungFrom);
  menuDiv.appendChild(rustico);
  menuDiv.appendChild(seoul);
  menuDiv.appendChild(freeLove);
  menuDiv.appendChild(marrakesh);
  menuDiv.appendChild(saltLick);
  menuDiv.appendChild(copenhag);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);
};

export default renderFlat;
