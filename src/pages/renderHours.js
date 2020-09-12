import Background from '../img/hoursBackgroundClip.jpg';
import {
  renderHero
} from '../components/hero';
import {
  changeFooterColor
} from '../components/footer';
import {
  renderArticle
} from '../components/article';

const renderHours = (content) => {

  // Set our text for our hours page
  const heroText = "We are a contemporary restaurant with a mind to source" +
    " local, seasonal, ingredients to create food inspired from around the world. " +
    "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
    "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";
  const heroURL = Background;


  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);

  // Render article element
  renderArticle(content);
  // Change our footer color to our page color
  changeFooterColor(`rgb(164,17,9)`);

}

export default renderHours;
