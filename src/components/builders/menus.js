"use strict";
// Build and append the menu title, and its accompanying blurb to the menu holder
const buildMenuTitle = (titleText, blurbText) => {
  // Grab holder
  let menuArticle = document.querySelector('.menu-holder');
  // Make and add title
  let title = document.createElement('h2');
  title.innerHTML = titleText;
  menuArticle.appendChild(title);

  let blurb = document.createElement('p')
  blurb.innerHTML = blurbText;
  menuArticle.appendChild(blurb);
}

// Build a menu item, pass in the item name, price, indredients(string),
// and any addons(ad obj {addonname: addonprice})
// returns the completed item
const buildMenuItem = (name, prc, ingred, addons = []) => {
  let holder = document.createElement('div');
  holder.setAttribute('class', 'menu-item-div');
  let titleHolder = document.createElement('div');
  titleHolder.setAttribute('class', 'menu-item-title-div');
  let title = document.createElement('h2');
  title.innerHTML = name;
  let price = document.createElement('h3');
  price.innerHTML = prc;
  titleHolder.appendChild(title);
  titleHolder.appendChild(price);
  let ingredients = document.createElement('p');
  ingredients.innerHTML = ingred;
  holder.appendChild(titleHolder);
  holder.appendChild(ingredients);
  // if any addons, build and append them
  for (var i = 0; i < addons.length; i++) {
    let addonText = document.createElement('p');
    addonText.innerHTML = addons[i];
    holder.appendChild(addonText);
  }
  // return completed menu item
  return holder;
}


export {
  buildMenuTitle,
  buildMenuItem,
}
