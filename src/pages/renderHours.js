import Background from '../img/hoursBackground.jpg';
import buildHero from '../components/heroImage';

const renderHours = (content) => {
  // Set our text for our hours page
  const heroText = "We are a contemporary restaurant with a mind to source" +
  " local, seasonal, ingredients to create food inspired from around the world." +
  "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
  "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  buildHero(heroText, heroURL, content);


  // Setup info sections

  // setup footer container


}

export default renderHours;
