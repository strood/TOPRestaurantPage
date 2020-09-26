"use strict";

import Background from '../img/menuBackgroundClip.jpg';
import {
  renderHero,
  renderHeroMenu,
} from '../components/hero';
import {
  renderArticle
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';
import renderLogo from '../components/renderLogo';
import {
  colorPicker,
} from '../components/colors';



// Render menus page
const renderMenus = (content) => {
  // Set our hero vars for our menus page
  const heroText = "MENUS";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content, colorPicker(2));

  // render article and grab it
  renderArticle(content);
  let article = document.querySelector('article');
  article.setAttribute('class', 'menus-article');

  renderHeroMenu();


  // Add logo to bottom of page
  renderLogo(article);

  // Update footer color
  changeFooterColor(colorPicker(2));

}

export default renderMenus;
