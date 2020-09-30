"use strict";

import Background from '../img/manifestoBackgroundClip.jpg';
import renderLogo from '../components/renderLogo';
import renderSocials from '../components/renderSocials';
import buildAboutUs from '../components/builders/buildAboutUs';
import buildAgreement from '../components/builders/buildAgreement';
import {
  renderHero
} from '../components/hero';
import {
  renderArticle,
  renderArticleTitle,
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';
import {
  colorPicker,
} from '../components/colors';

// Render manifesto page
const renderManifesto = (content) => {
  // Set our hero vars for our manifesto page
  const heroText = "MANISFESTO";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content, colorPicker(3));

  // Render article and grab it
  renderArticle(content);
  let article = document.querySelector('article');
  article.setAttribute('class', 'manifesto-article');

  // Build about us section
  renderArticleTitle('About Us', colorPicker(3));
  // Builds our about us section and appends to passed in article
  buildAboutUs(article);

  // Build agreement section
  renderArticleTitle('Agreement', colorPicker(3));
  // Builds agreement section and appends to passed in article
  buildAgreement(article);

  // Add social media links to bottom of page
  renderSocials(article, colorPicker(3));

  // Add logo to bottom of page
  renderLogo(article);
  // Update footer color
  changeFooterColor(colorPicker(3));
}

export default renderManifesto;
