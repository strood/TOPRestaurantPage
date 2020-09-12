import Background from '../img/hoursBackgroundClip.jpg';
import {
  renderHero
} from '../components/hero';
import {
  changeFooterColor
} from '../components/footer';
import {
  renderArticle,
  buildArticleCard,
} from '../components/article';
import renderLogo from '../components/renderLogo';
import {
  colorPicker,
} from '../components/colors';


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

  let article = document.querySelector('article');

  article.setAttribute('class', 'hours-article');

  // Create two cards, add them to artice.

  // Build address card
  let addressText = document.createElement('pre');
  addressText =
  "            4930 Ross St.\n" +
  "            Red Deer, AB\n" +
  "                T4N 1X7\n" +
  "\n" +

  "    phone: 403-392-3046\n" +
  "email: eat@tribeflatout.com";

  let addressCard = buildArticleCard('Address', addressText, colorPicker(1));
  article.appendChild(addressCard);

  // Build hours card
  let hoursText = document.createElement('pre');
  hoursText =
  "   Tuesday 11:30 a.m. – 2:30 p.m.\n" +
  "    Wednesday 11:30 a.m. – LATE\n" +
  "     Thursday 11:30 a.m. – LATE\n" +
  "       Friday 11:30 a.m. – LATE\n" +
  "     Saturday 11:30 a.m. – LATE\n" +
  "\n" +
  "Happy Hour: 2:30 p.m. – 4:30 p.m.";


  let hoursCard = buildArticleCard('Hours', hoursText, colorPicker(1));
  article.appendChild(hoursCard);

  // Add logo to bottom of page
  renderLogo(content);
  // Change our footer color to our page color
  changeFooterColor(colorPicker(1));

}

export default renderHours;
