import Background from '../img/tribeheader.jpg';
import buildHero from '../components/heroImage';

const renderContact = (content) => {
  // Set our text for our hours page
  const heroText = "contact!";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  buildHero(heroText, heroURL, content);


}

export default renderContact;
