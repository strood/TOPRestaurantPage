// Imports
import renderBrunch from '../menus/renderBrunch';
import renderLunch from '../menus/renderLunch';
import renderSmall from '../menus/renderSmall';
import renderBig from '../menus/renderBig';
import renderFlat from '../menus/renderFlat';
import renderSweet from '../menus/renderSweet';
import renderCoffee from '../menus/renderCoffee';
import renderCocktails from '../menus/renderCocktails';

import refreshMenu from './refreshMenu';

// Given the index of the page, call approproate render function, passing
// in the main body content it will render to.
const menuController = (index) => {
  // Create new menu holder
  const menuHolder = document.createElement('div');
  menuHolder.setAttribute('class', 'menu-holder');

  // Refresh menuArticle and append our new menuholder
  refreshMenu(menuHolder);

  // Switch based on index pressed (menu chosen)
  switch (index) {
    case ('1'):
      renderBrunch(menuHolder);
      break;
    case ('2'):
      renderLunch(menuHolder);
      break;
    case ('3'):
      renderSmall(menuHolder);
      break;
    case ('4'):
      renderBig(menuHolder);
      break;
    case ('5'):
      renderFlat(menuHolder);
      break;
    case ('6'):
      renderSweet(menuHolder);
      break;
    case ('7'):
      renderCoffee(menuHolder);
      break;
    case ('8'):
      renderCocktails(menuHolder);
      break;
    default:
      break;
  }
};

export default menuController;
