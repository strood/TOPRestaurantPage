const makeTab = (name, index) => {
  let tab = document.createElement('button');
  tab.setAttribute('class', 'mdc-tab');
  tab.setAttribute('role', 'tab');
  tab.setAttribute('tabindex', index);

  let tabContent = document.createElement('span');
  tabContent.setAttribute('class', 'mdc-tab__content');

  let tabIcon = document.createElement('span');
  tabIcon.setAttribute('class', 'mdc-tab__icon');

  let tabText = document.createElement('span');
  tabText.setAttribute('class', 'mdc-tab__text-label');

  tabText.innerHTML = name;

  tabContent.appendChild(tabText);

  let tabIndicator = document.createElement('span');
  tabIndicator.setAttribute('class', 'mdc-tab-indicator');

  let tabIndicatorCnt = document.createElement('span');
  tabIndicatorCnt.setAttribute('class', 'mdc-tab-indicator__content mdc-tab-indicator__content--underline');
  tabIndicator.appendChild(tabIndicatorCnt);

  let tabRipple = document.createElement('span');
  tabRipple.setAttribute('class', 'mdc-tab__ripple');

  tab.appendChild(tabContent);
  tab.appendChild(tabIndicator);
  tab.appendChild(tabRipple);

  return tab;
}

export default makeTab;
