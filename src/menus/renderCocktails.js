import Background from '../img/TribeOranges.jpg';
import {
  updateHeroPic,
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderCocktails = (menuHolder) => {
  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle('Cocktails', 'Handcrafted cocktails, along with an everchanging local craft beer menu...'
  + ' but you will have to come in to check that out.');

  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  // Build menu items
  const earthCherry = buildMenuItem('::earth to cherry moon', '(2oz)', 'top shelf bourbon,'
  + ' blackberry liqueur, ginger, lemon juice, bourbon soaked cherries, nutmeg.');
  const gent = buildMenuItem('::temporary gentleman', '(2oz)', 'top shelf bourbon, simple syrop, cherry bitters, bourbon soaked cherries, orange twist.');
  const pink = buildMenuItem('::something pink', '(2oz)', 'raspberry vodka, saint germain, aperol, lime, dash of pomegranate syrup.');
  const caesar = buildMenuItem('::diry caesar', '(2oz)', "dill pickle vodka, walter's caesar concoction, lemon pepper, double pickles.");
  const maiTai = buildMenuItem('::two decade mai tai', '(2oz)', 'amber rum, amaretto, orange liqueur, pineapple, orange and guava juice.');
  const hula = buildMenuItem('::hula thunder', '(3oz)', 'almond liqueur, pineapple & coconut rum, blue curacao, cream.');
  const perfMarg = buildMenuItem('::perfecto margarita', '(2oz)', 'gold tequila, grand marnier, fresh lime juice, cinnamon syrup, on the rocks.');
  const zombie = buildMenuItem('::prarie zombie', '(3oz)', 'tequila, dark rum, blue orange liquer, muddled mint, guava juice, cayenne simple syrup, float of pomagranate liqueur.');
  const solar = buildMenuItem('::solar flair', '(2oz)', 'aquavit, chartruese espiscopal, cayenne, basil.');
  const raspMarg = buildMenuItem('::black raspberry margarita', '(2oz)', 'tequila, chambord, giner syrup, fresh squeezed lime.');
  const float = buildMenuItem('::bamboo float', '(0oz)', 'two parts hydrogen, one part oxygen and bubbles, with a spear of kiln-dried bamboo, citrus wedge. - $1.50');

  // Append items to page
  menuDiv.appendChild(earthCherry);
  menuDiv.appendChild(gent);
  menuDiv.appendChild(pink);
  menuDiv.appendChild(caesar);
  menuDiv.appendChild(maiTai);
  menuDiv.appendChild(hula);
  menuDiv.appendChild(perfMarg);
  menuDiv.appendChild(zombie);
  menuDiv.appendChild(solar);
  menuDiv.appendChild(raspMarg);
  menuDiv.appendChild(float);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);
};

export default renderCocktails;
