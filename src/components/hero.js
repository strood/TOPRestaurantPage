"use strict";
// Construct a hero image element and add to page
const renderHero = (text, image, content, color) => {

  // Build image background
  const imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'hero-image');
  imageDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
  imageDiv.style.borderBottom = `3px solid ${color}`;
  // Build text
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'hero-text');
  const title = document.createElement('h1');
  title.innerHTML = text;
  textDiv.appendChild(title)

  // Put together and append to content
  imageDiv.appendChild(textDiv);
  content.appendChild(imageDiv);

}

export {
  renderHero,
}
