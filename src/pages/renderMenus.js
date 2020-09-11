import Background from '../img/tribeheaderclip.png';
import buildHero from '../components/heroImage';


const renderMenus = (content) => {
  // Set our text for our hours page
  const heroText = "MENUS";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  buildHero(heroText, heroURL, content);
}

export default renderMenus;
