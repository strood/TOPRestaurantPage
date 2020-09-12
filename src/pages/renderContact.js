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
import renderLogo from '../components/renderLogo';
import {
  colorPicker,
} from '../components/colors';




const renderContact = (content) => {
  // Set our text for our hours page
  const heroText = "CONTACT";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content, colorPicker(4));

  // Render article element
  renderArticle(content);
  let article = document.querySelector('article');
  article.setAttribute('class', 'contact-article');

  // Make a card for call/email info, and one for message

  // Insert google map into content so its width constrined

  // Add logo to bottom of page
  renderLogo(article);

  // Change our footer color to our page color
  changeFooterColor(colorPicker(4));

}

export default renderContact;
