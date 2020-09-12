import Background from '../img/manifestoBackgroundClip.jpg';
import {
  renderHero
} from '../components/hero';
import renderLogo from '../components/renderLogo';
import {
  renderArticle,
  renderArticleTitle,
} from '../components/article';
import {
  changeFooterColor
} from '../components/footer';
import {
  colorPicker,
} from '../components/colors';

const renderManifesto = (content) => {
  // Set our text for our hours page
  const heroText = "MANISFESTO";
  const heroURL = Background;

  // Builds a hero element with the text, background image, and appends to our content
  renderHero(heroText, heroURL, content);

  // Render article
  renderArticle(content);

  // Build about us section
  renderArticleTitle('About Us', colorPicker(3));

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
  
  // Build agreement section
  renderArticleTitle('Agreement', colorPicker(3));

  let text2 = document.createElement('p');
  text2.innerHTML = "Don't think of these as house rules, so much as strong suggestions " +
    "about how you might make your time here together a thing of beauty.";

  let ul = document.createElement('ul');
  const agreements = ["Pretend it’s 1970 and cell phones don’t exist and we take our hats off inside.",
    "Say one thing that turns you on about life.",
    "Notice how sexy your server is and flirt a little.",
    "Dream about a foreign country you’d like to visit.",
    "Conjugate ‘tribe’ into an adverb and adjective and use it in a clever sentence.",
    "take a moment to appreciate and embrace your tribe with a toast.",
    "Be uninhibited for a few moments… in a kind way.",
    "Use expressive language. If you must swear, the tribe charge is $20 a word, if any one overhears."
  ];

  // Add agreements to ul in article
  for (var i = 0; i < agreements.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = agreements[i];
    ul.appendChild(li);
  }

  // Add items to article.
  article.appendChild(text2);
  article.appendChild(ul);

  // Add logo to bottom of page
  renderLogo(article);
  // Update footer color
  changeFooterColor(colorPicker(3));
}

export default renderManifesto;
