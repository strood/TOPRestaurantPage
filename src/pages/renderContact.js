import Background from '../img/contactBackground.jpg';
import {
  renderHero
} from '../components/hero';
import {
  renderArticle
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';



const renderContact = (content) => {
  // Set our text for our hours page
  const heroText = "CONTACT";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);

  // Render article
  renderArticle(content);

  changeFooterColor(`rgb(218,194,0)`);


}

export default renderContact;
