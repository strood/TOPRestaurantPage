import Background from '../img/tribeheader.jpg';
import buildHero from '../components/heroImage';

const renderManifesto = (content) => {
  // Set our text for our hours page
  const heroText = "Manifesto!";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  buildHero(heroText, heroURL, content);

}

export default renderManifesto;
