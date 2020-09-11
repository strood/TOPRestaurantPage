// Construct a hero image element and add to page
const heroImage = (text, image, content) => {

  // Build image background
  const imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'hero-image');
  imageDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
  // Build text
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'hero-text');
  textDiv.innerHTML = text;

  // Put together and append to content
  imageDiv.appendChild(textDiv);
  content.appendChild(imageDiv);
}

export default heroImage;
