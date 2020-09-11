// Build a nav tab w given name and index
const makeTab = (name, index) => {
  // Build basic button /w attributes, set index to given index
  let tab = document.createElement('button');
  tab.setAttribute('class', 'mdc-tab');
  tab.setAttribute('role', 'tab');
  tab.setAttribute('tabindex', index);

  // content container
  let tabContent = document.createElement('span');
  tabContent.setAttribute('class', 'mdc-tab__content');

  // Tab text, set tab name
  let tabText = document.createElement('span');
  tabText.setAttribute('class', 'mdc-tab__text-label');
  tabText.innerHTML = name;

  // Add text to content
  tabContent.appendChild(tabText);

  // Additonal tab design elements, building and adding required attributes
  let tabIndicator = document.createElement('span');
  tabIndicator.setAttribute('class', 'mdc-tab-indicator');

  let tabIndicatorCnt = document.createElement('span');
  tabIndicatorCnt.setAttribute('class', 'mdc-tab-indicator__content mdc-tab-indicator__content--underline');
  tabIndicator.appendChild(tabIndicatorCnt);

  let tabRipple = document.createElement('span');
  tabRipple.setAttribute('class', 'mdc-tab__ripple');

  // Put all the elements together on a tab
  tab.appendChild(tabContent);
  tab.appendChild(tabIndicator);
  tab.appendChild(tabRipple);

  // return the completed tab 
  return tab;
}

export default makeTab;
