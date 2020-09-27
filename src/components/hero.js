"use strict";
import menuController from '../controllers/menuController';

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

// update background image of hero element
const updateHeroPic = (image) => {
  let imageDiv = document.querySelector('.hero-image');
  imageDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
}

// update background image of hero element
const renderHeroMenu = () => {
  // Grab hero to attatch to
  let imageDiv = document.querySelector('.hero-image');

  // Dropdown holder
  let dropdown = document.createElement('div');
  dropdown.setAttribute('class', 'select');

  // Select menu
  let select = document.createElement('select');
  select.setAttribute('name', 'slct');
  select.setAttribute('id', 'slct');

  // Options
  let chooseOpt = document.createElement('option');
  chooseOpt.setAttribute('selected', "");
  chooseOpt.setAttribute('disabled', "");
  chooseOpt.innerHTML = "Choose a menu";
  let brunchOpt = document.createElement('option');
  brunchOpt.setAttribute('value', "1");
  brunchOpt.innerHTML = "Brunch";
  let lunchOpt = document.createElement('option');
  lunchOpt.setAttribute('value', "2");
  lunchOpt.innerHTML = "Lunch";
  let smallOpt = document.createElement('option');
  smallOpt.setAttribute('value', "3");
  smallOpt.innerHTML = "Small Plates";
  let bigOpt = document.createElement('option');
  bigOpt.setAttribute('value', "4");
  bigOpt.innerHTML = "Big Plates";
  let flatOpt = document.createElement('option');
  flatOpt.setAttribute('value', "5");
  flatOpt.innerHTML = "Flat Plates";
  let sweetOpt = document.createElement('option');
  sweetOpt.setAttribute('value', "6");
  sweetOpt.innerHTML = "Sweet Plates";
  let coffeeOpt = document.createElement('option');
  coffeeOpt.setAttribute('value', "7");
  coffeeOpt.innerHTML = "Coffee";

  // Add options to dropdown
  select.appendChild(chooseOpt);
  select.appendChild(brunchOpt);
  select.appendChild(lunchOpt);
  select.appendChild(smallOpt);
  select.appendChild(bigOpt);
  select.appendChild(flatOpt);
  select.appendChild(sweetOpt);
  select.appendChild(coffeeOpt);

  for (var i = 1; i < select.children.length; i++) {
    console.log(select.children[i]);
    select.children[i].addEventListener('click', (e) => {
      menuController(e.target.value);
    })
  }
  console.log(select.children);

  // Add to dropdown holder
  dropdown.appendChild(select);

  // Add completed dropdown to hero
  imageDiv.appendChild(dropdown);
}

export {
  renderHero,
  updateHeroPic,
  renderHeroMenu,
}
