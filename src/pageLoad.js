import navLoad from './navLoad';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTab} from '@material/tab';
import Background from './img/tribeheader.jpg';
import MobileBackground from './img/tribeheadermobile.png';

const pageLoad = () => {
  // Setup main container
  const body = document.querySelector('body');
  const content = document.createElement('main');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  // Setup nav/tab Bar
  navLoad(content);
  // default to hours tab
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.activateTab(0);

  // Setup Body
  // heroLoad
  const heroContainer = document.createElement('div');
  heroContainer.setAttribute('class', 'hero-container');
  const heroTextDiv = document.createElement('div');
  const heroText = document.createElement('p');
  heroTextDiv.setAttribute('class', 'hero-text-div');
  heroText.setAttribute('class', 'hero-text');

  heroText.innerHTML = "We are a contemporary restaurant with a mind to source local, seasonal, ingredients to create food inspired from around the world. \t" +
  "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
  "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";
  heroTextDiv.appendChild(heroText);
  const homeBackground = new Image();

  window.onresize = () => {
    if (window.innerWidth < 700) {
      homeBackground.src = MobileBackground;
      heroContainer.appendChild(homeBackground);
      heroTextDiv.remove();
      const heroTextAlt = document.createElement('p');


    } else {
      homeBackground.src = Background;

      heroContainer.appendChild(homeBackground);
      heroContainer.appendChild(heroTextDiv);
    }
  }

  if (window.innerWidth < 700) {
    homeBackground.src = MobileBackground;
    heroContainer.appendChild(homeBackground);



  } else {
    homeBackground.src = Background;

    heroContainer.appendChild(homeBackground);
    heroContainer.appendChild(heroTextDiv);
  }

  content.appendChild(heroContainer);

  // setup footer container


}

export default pageLoad;
