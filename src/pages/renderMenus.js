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



const renderMenus = (content) => {
  // Set our text for our hours page
  const heroText = "MENUS";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);


  // render article
  renderArticle(content);


  changeFooterColor(`rgb(143, 0, 102)`);

}

export default renderMenus;
