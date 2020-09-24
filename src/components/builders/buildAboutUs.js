"use strict";

// Build and about us section and append it to passed in article
const buildAboutUs = (article) => {
  // Setup text sections
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');

  // Build texts
  p1.innerHTML = `A committed social group, comprising relations and adopted ` +
    `strangers. People connected by a shared interest, such as beer, shoes, knitting, ` +
    `fancy chickens, star trek, yoga, quidditch, cannabis, heirloom vegetables, bugs, ` +
    `bread-making, cats, world-wandering, glass-blowing, curling, canines…… You… are ` +
    `part of our tribe. One thing that’s common among humanity is our love of food, ` +
    `drink, and storytelling. Here at Tribe we imagine all people, regardless of ` +
    `culture, background, or life philosophy, coming together to enjoy craft beer and ` +
    `our internationally inspired menu.`;
  p2.innerHTML = `Using locally-sourced ingredients whenever we ` +
    `can, our menu has been thoughtfully crafted by chefs that care about your culinary experience. ` +
    `Inspired by our ancestors from around the world, we invite you to enjoy our ` +
    `offerings, while celebrating one another, and our equally diverse and beautiful journeys.`;
  p3.innerHTML = `We look forward to sharing our worlds with your worlds… in a sexy, sophisticated ` +
    `way. Romance isn’t just for lovers ‐ it’s to be shared with all of humanity!`;
  p4.innerHTML = `Eat a little. Drink a little. Flirt a little. Tell your most awesome stories.`

  // Style text
  p4.style.alignSelf = 'center';
  p4.style.alignSelf = 'center';

  // Append text to article
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(p4);
}


export default buildAboutUs;
