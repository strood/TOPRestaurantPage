"use strict";

import Background from '../img/hoursBackgroundClip.jpg';
import buildHoursCard from '../components/builders/buildHoursCard';
import buildAddressCard from '../components/builders/buildAddressCard';

import {
  renderHero
} from '../components/hero';
import {
  changeFooterColor
} from '../components/footer';
import {
  renderArticle,
} from '../components/article';
import renderSocials from '../components/renderSocials';
import renderLogo from '../components/renderLogo';
import {
  colorPicker,
} from '../components/colors';

// Render hours page
const renderHours = (content) => {
  // Set our hero vars for our hours page
  const heroURL = Background;
  const heroText = "We are a contemporary restaurant with a mind to source" +
    " local, seasonal, ingredients to create food inspired from around the world. " +
    "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
    "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content, colorPicker(1));

  // Render article element and grab it
  renderArticle(content);
  let article = document.querySelector('article');
  article.setAttribute('class', 'hours-article');

  // Create two cards, add them to artice.

  // Build address card
  buildAddressCard(article);

  // Build hours card
  buildHoursCard(article);

  // Add social media links to bottom of page
  renderSocials(content, colorPicker(1));

  // Add logo to bottom of page
  renderLogo(content);

  // Change our footer color to our page color
  changeFooterColor(colorPicker(1));

}

export default renderHours;
