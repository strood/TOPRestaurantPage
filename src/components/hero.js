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
  textDiv.appendChild(title);

  // Put together and append to content
  imageDiv.appendChild(textDiv);
  content.appendChild(imageDiv);
};

// update background image of hero element
const updateHeroPic = (image) => {
  const imageDiv = document.querySelector('.hero-image');
  imageDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
};

// update background image of hero element
const renderHeroMenu = () => {
  // Grab hero to attatch to
  const imageDiv = document.querySelector('.hero-image');

  // Dropdown holder
  const dropdown = document.createElement('div');
  dropdown.setAttribute('class', 'select');

  // Select menu
  const select = document.createElement('select');
  select.setAttribute('name', 'slct');
  select.setAttribute('id', 'slct');

  // Options
  const chooseOpt = document.createElement('option');
  chooseOpt.setAttribute('selected', '');
  chooseOpt.setAttribute('disabled', '');
  chooseOpt.innerHTML = 'Choose a menu';
  const brunchOpt = document.createElement('option');
  brunchOpt.setAttribute('value', '1');
  brunchOpt.setAttribute('class', 'menuOption');
  brunchOpt.innerHTML = 'Brunch';
  const lunchOpt = document.createElement('option');
  lunchOpt.setAttribute('value', '2');
  lunchOpt.setAttribute('class', 'menuOption');
  lunchOpt.innerHTML = 'Lunch';
  const smallOpt = document.createElement('option');
  smallOpt.setAttribute('value', '3');
  smallOpt.setAttribute('class', 'menuOption');
  smallOpt.innerHTML = 'Small Plates';
  const bigOpt = document.createElement('option');
  bigOpt.setAttribute('value', '4');
  bigOpt.setAttribute('class', 'menuOption');
  bigOpt.innerHTML = 'Big Plates';
  const flatOpt = document.createElement('option');
  flatOpt.setAttribute('value', '5');
  flatOpt.setAttribute('class', 'menuOption');
  flatOpt.innerHTML = 'Flat Plates';
  const sweetOpt = document.createElement('option');
  sweetOpt.setAttribute('value', '6');
  sweetOpt.setAttribute('class', 'menuOption');
  sweetOpt.innerHTML = 'Sweet Plates';
  const coffeeOpt = document.createElement('option');
  coffeeOpt.setAttribute('value', '7');
  coffeeOpt.setAttribute('class', 'menuOption');
  coffeeOpt.innerHTML = 'Coffee';
  const cocktailOpt = document.createElement('option');
  cocktailOpt.setAttribute('value', '8');
  cocktailOpt.setAttribute('class', 'menuOption');
  cocktailOpt.innerHTML = 'Cocktails';

  // Add options to dropdown
  select.appendChild(chooseOpt);
  select.appendChild(brunchOpt);
  select.appendChild(lunchOpt);
  select.appendChild(smallOpt);
  select.appendChild(bigOpt);
  select.appendChild(flatOpt);
  select.appendChild(sweetOpt);
  select.appendChild(coffeeOpt);
  select.appendChild(cocktailOpt);

  // Add to dropdown holder
  dropdown.appendChild(select);

  // Add completed dropdown to hero
  imageDiv.appendChild(dropdown);
};

export {
  renderHero,
  updateHeroPic,
  renderHeroMenu,
};
