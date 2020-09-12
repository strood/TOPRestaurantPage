import Background from '../img/manifestoBackgroundClip.jpg';
import {
  renderHero
} from '../components/hero';
import {
  renderArticle,
  renderArticleTitle,
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';

const renderManifesto = (content) => {
  // Set our text for our hours page
  const heroText = "MANISFESTO";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);

  // Render article
  renderArticle(content);

  renderArticleTitle('About Us', `rgb(4,91,163)`);

  let article = document.querySelector('article');
  let text = document.createElement('p');
  text.innerHTML = `A committed social group comprising relations and adopted ` +
  `strangers. People connected by a shared interest such as beer, shoes, knitting, ` +
  `fancy chickens, star trek, yoga, quidditch, cannabis, heirloom vegetables, bugs, ` +
  `bread-making, cats, world-wandering, glass-blowing, curling, canines … You… are ` +
  `part of our tribe. One thing that’s common among humanity is our love of food, ` +
  `drink, and storytelling. Here at Tribe we imagine all people regardless of ` +
  `culture, background, or life philosophy coming together to enjoy craft beer and ` +
  `our internationally inspired menu using locally-sourced ingredients whenever we ` +
  `can, thoughtfully created by chefs that care about your culinary experience. ` +
  `Inspired by our ancestors from around the world we invite you to enjoy our ` +
  `offerings, celebrate one another and our equally diverse and beautiful journeys. ` +
  `We look forward to sharing our worlds with your worlds… in a sexy sophisticated ` +
  `way. Romance isn’t just for lovers ‐ it’s to be shared with all of humanity. Eat ` +
  `a little. Drink a little. Flirt a little. Tell your most awesome stories.`

  article.appendChild(text);


  changeFooterColor(`rgb(4,91,163)`);
}

export default renderManifesto;
