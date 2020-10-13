import Background from '../img/TribeCharcuterie.jpg';
import {
  updateHeroPic,
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderSmall = (menuHolder) => {
  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle('Small Plates', 'Salads and small plates are easy to share.'
    + ' Enjoy one before a meal, or get 3-4 and share them for your meal.'
    + ' We are working hard to make the chef’s board the best collection of charcuterie,'
    + ' cheese, and goodies to nibble on, in the region. Help us propagate that rumour'
    + ' with your social media prowess and natural charm... You’ll be rewarded!');

  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  // Build menu items
  const chefBoard = buildMenuItem("chef's board", '34', 'a fine collection of meats, '
    + 'cheeses, and other edible delights from the minds of our chefs. Serves 2-4');
  const charcut = buildMenuItem('une petite charcuterie', '18', 'a smaller version of the chef’s board. Serves 1-2.');
  const thump = buildMenuItem('thumpers feast', '18', "a vegetarian version of the chef's board. Serves 1-2");
  const poutine = buildMenuItem('cast iron poutine', '12', 'potatoes, cheese, bacon in a cast iron fry pan.');
  const tomatoes = buildMenuItem('roasted tomatoes', '12', 'roasted tomatoes, with fresh herbs and goat cheese. Served with our own, house-made ciabatta.');
  const tribeSalad = buildMenuItem('tribe salad', '13', 'cantaloupe, cucumber, tomato, goat cheese,'
    + ' nuts, kalamata olives, lime, cilantro, red onion.', ['add proscuitto $3']);
  const ldEggs = buildMenuItem('lemon devilled eggs', '9', 'tarragon cream cheese stuffed eggs,'
    + ' with shaved sharp cheese, on a bed of arugula, with ginger lemon dressing.');
  const spread = buildMenuItem('spread and bread', '12', "the world's best spinach dip or Maximillion's hummus,"
    + ' served with Iranian flatbread, seasoned with Zatar spice.');
  const porto = buildMenuItem('eat your rocket, stuffed portabello', '14', 'baked portabello, stuffed with cream cheese'
    + ' and herbs. Topped with Japanese bread crumbs, on a bed of arugula, with lemon ginger dressing... which we strongly encourage you to devour!');
  const rocketSalad = buildMenuItem('rocket salad', '9', 'arugula, with ginger lemon dressing.'
    + ' topped with beet, dill infused pickled onions.');

  // Append items to page
  menuDiv.appendChild(chefBoard);
  menuDiv.appendChild(charcut);
  menuDiv.appendChild(thump);
  menuDiv.appendChild(poutine);
  menuDiv.appendChild(tomatoes);
  menuDiv.appendChild(tribeSalad);
  menuDiv.appendChild(ldEggs);
  menuDiv.appendChild(spread);
  menuDiv.appendChild(porto);
  menuDiv.appendChild(rocketSalad);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);
};

export default renderSmall;
