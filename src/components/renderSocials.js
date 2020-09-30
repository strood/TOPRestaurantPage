"use strict";
// Render social media box to content
const renderSocials = (content, color) => {

  let holder = document.createElement('div');
  holder.setAttribute('class', 'socials-div');

  let tHolder = document.createElement('a');
  tHolder.setAttribute('href', 'https://www.twitter.com/tribeflatout/');
  let twitter = document.createElement('i');
  twitter.setAttribute('class', 'fab fa-twitter');
  twitter.style.color = `${color}`;
  tHolder.appendChild(twitter);

  let fHolder = document.createElement('a');
  fHolder.setAttribute('href', 'https://www.facebook.com/tribeflatout/');
  let facebook = document.createElement('i');
  facebook.setAttribute('class', 'fab fa-facebook');
  facebook.style.color = `${color}`;

  fHolder.appendChild(facebook);

  holder.appendChild(tHolder);
  holder.appendChild(fHolder);

  content.appendChild(holder);

}

export default renderSocials;
