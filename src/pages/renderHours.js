import Background from '../img/tribeheader.jpg';
import renderFrame from './renderFrame';

const renderHours = (content) => {

  // Setup frame for content
  let frame = renderFrame();

  // Create main hero container
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


  frame.appendChild(heroContainer);

  content.appendChild(frame);


  // Setup info sections

  // setup footer container


}

export default renderHours;
