// Build and append the menu title, and its accompanying blurb to the menu holder
const buildMenuTitle = (titleText, blurbText) => {
  // Grab holder
  const menuArticle = document.querySelector('.menu-holder');
  // Make and add title
  const title = document.createElement('h2');
  title.innerHTML = titleText;
  menuArticle.appendChild(title);
  // Blurb for each menu section
  const blurb = document.createElement('p');
  blurb.innerHTML = blurbText;
  menuArticle.appendChild(blurb);
};

// Build a menu item, pass in the item name, price, indredients(string),
// and any addons(ad obj {addonname: addonprice})
// returns the completed item
const buildMenuItem = (name, prc, ingred, addons = []) => {
  const holder = document.createElement('div');
  holder.setAttribute('class', 'menu-item-div');
  const titleHolder = document.createElement('div');
  titleHolder.setAttribute('class', 'menu-item-title-div');
  const title = document.createElement('h2');
  title.innerHTML = name;
  const price = document.createElement('h3');
  price.innerHTML = prc;
  titleHolder.appendChild(title);
  titleHolder.appendChild(price);
  const ingredients = document.createElement('p');
  ingredients.innerHTML = ingred;
  holder.appendChild(titleHolder);
  holder.appendChild(ingredients);
  // if any addons, build and append them
  for (let i = 0; i < addons.length; i += 1) {
    const addonText = document.createElement('p');
    addonText.innerHTML = addons[i];
    holder.appendChild(addonText);
  }
  // return completed menu item
  return holder;
};

export {
  buildMenuTitle,
  buildMenuItem,
};
