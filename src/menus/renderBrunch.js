import Background from '../img/TribePizza2.jpg';
import {
  updateHeroPic,
} from '../components/hero';
import {
  buildMenuTitle,
  buildMenuItem,
} from '../components/builders/menus';

const renderBrunch = (menuHolder) => {
  // Refresh hero image
  updateHeroPic(Background);

  // Render title on page
  buildMenuTitle('Brunch', 'All brunch items come with one of the following: potatas max, 1/2 fresh tomato, rocket fruit salad.');

  // Build menu items
  // holder for menu items, so we can adjust independent from title.
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menu-div');

  const bennyFB = buildMenuItem('traditional benny flatbread', '18', 'soft poached eggs, prosciutto, served with lemony house-made hollandaise.');
  const betFB = buildMenuItem('bacon, eggg, and tomato flatbread', '18', 'soft poached eggs, bacon and tomato served with lemony house-made hollandaise.');
  const loxFB = buildMenuItem('lox & cream cheese flatbread', '18', 'soft poached eggs, bacon and tomato served with lemony house-made hollandaise.');

  // Append items to page
  menuDiv.appendChild(bennyFB);
  menuDiv.appendChild(betFB);
  menuDiv.appendChild(loxFB);

  // Add our div to holder
  menuHolder.appendChild(menuDiv);
};

export default renderBrunch;
