import navLoad from './navLoad';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTab} from '@material/tab';
import Background from './img/tribeheader.jpg';
import MobileBackground from './img/tribeheadermobile.png';

const homeLoad = () => {
  // Setup main container
  const body = document.querySelector('body');
  // Setup nav/tab Bar
  navLoad(body);
  const content = document.createElement('main');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  // default to hours tab
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.activateTab(0);



  // Initial page load width detection to set style
  const heroContainer = document.createElement('div');
  heroContainer.setAttribute('class', 'hero-container');

  const heroText = document.createElement('p');
  heroText.setAttribute('class', 'hero-text');
  heroText.innerHTML = "We are a contemporary restaurant with a mind to source" +
  " local, seasonal, ingredients to create food inspired from around the world." +
  "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
  "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";

  const heroTextDiv = document.createElement('div');
  heroTextDiv.setAttribute('class', 'hero-text-div');
  heroTextDiv.appendChild(heroText);
  heroContainer.appendChild(heroTextDiv);

  const homeBackground = new Image();

  if (window.innerWidth < 700) {
    homeBackground.src = Background;
    heroContainer.appendChild(homeBackground);

  } else {
    homeBackground.src = Background;
    heroContainer.appendChild(homeBackground);

  }


  content.appendChild(heroContainer);


  // Recurring onresize event listener to adjust style for mobile
  // window.onresize = () => {
  //   if (window.innerWidth < 700 ) {
  //     homeBackground.src = MobileBackground;
  //     heroContainer.appendChild(homeBackground);
  //     if (document.querySelector('.hero-text-div')) {
  //       document.querySelector('.hero-text-div').remove();
  //     }
  //
  //
  //
  //   } else if (window.innerWidth > 700) {
  //     homeBackground.src = Background;
  //     heroContainer.appendChild(homeBackground);
  //     heroContainer.appendChild(heroTextDiv);
  //   }
  // }

  // Setup info sections

  // setup footer container


}

export default homeLoad;
