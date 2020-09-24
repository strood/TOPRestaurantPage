"use strict";

import Background from '../img/contactBackground.jpg';
import renderLogo from '../components/renderLogo';
import buildEventCard from '../components/builders/buildEventCard';
import buildContactCard from '../components/builders/buildContactCard';
import buildMessageCard from '../components/builders/buildMessageCard';
import buildMap from '../components/builders/buildMap';
import {
  renderHero
} from '../components/hero';
import {
  renderArticle,
  buildArticleCard,
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';
import {
  colorPicker,
} from '../components/colors';

// Render contact page
const renderContact = (content) => {
  // Set our hero vars for our contact page
  const heroText = "CONTACT";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content, colorPicker(4));

  // Render article element
  renderArticle(content);
  let article = document.querySelector('article');
  article.setAttribute('class', 'contact-article');

  // Make a card for call/email info, and one for message, and one for event

  // Build event card
  buildEventCard(article);

  // Build contactt card
  buildContactCard(article);

  // Build message card
  buildMessageCard(content);

  // Insert google map into content so its width constrined
  // buildMap(content);

  // Add logo to bottom of page
  renderLogo(content);

  // Change our footer color to our page color
  changeFooterColor(colorPicker(4));

}

export default renderContact;
