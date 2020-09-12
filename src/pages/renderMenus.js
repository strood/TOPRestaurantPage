import Background from '../img/menuBackgroundClip.jpg';
import {
  renderHero
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




const renderMenus = (content) => {
  // Set our text for our hours page
  const heroText = "MENUS";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);


  // render article
  renderArticle(content);

  let article = document.querySelector('article');


  // Add logo to bottom of page
  renderLogo(article);


  changeFooterColor(colorPicker(2));

}

export default renderMenus;
