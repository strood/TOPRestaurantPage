const buildMap = (content) => {
  const container = document.createElement('div');
  container.setAttribute('class', 'map-container');
  const display = document.createElement('div');
  display.setAttribute('class', 'map-display');
  const frame = document.createElement('iframe');
  frame.setAttribute('class', 'map-frame');
  frame.setAttribute('src', 'https://www.google.com/maps/embed/v1/search?q=tribe+red+deer&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8');

  display.appendChild(frame);
  container.appendChild(display);

  content.appendChild(container);
};

export default buildMap;
