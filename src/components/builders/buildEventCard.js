import {
  buildArticleCard,
} from '../article';
import {
  colorPicker,
} from '../colors';

// Build event card and add to given article
const buildEventCard = (article) => {
  // Build elements, skipping pre and appernding these instead
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  p1.innerHTML = 'Tribe welcomes events, parties and celebrations.';
  p2.innerHTML = 'We are happy to discuss booking the whole facility or part of it for your event.';
  p3.innerHTML = 'Just give us a call to discuss rates, menus, and any special requirements you have.';

  // Make card ad add elements
  const eventCard = buildArticleCard('- Your Event -', '', colorPicker(4));
  eventCard.appendChild(p1);
  eventCard.appendChild(p2);
  eventCard.appendChild(p3);

  // Add completed event card to article
  article.appendChild(eventCard);
};

export default buildEventCard;
