import makeTab from './makeTab';

const navLoad = (content) => {
  // Construct a matrial-ui tab nav style navbar and add to content element
  // passed in

  // Make tabBar
  let tabBar = document.createElement('div');
  tabBar.setAttribute('class', 'mdc-tab-bar');
  tabBar.setAttribute('role', 'tablist');

  // Make tabScroller
  let tabScroller = document.createElement('div');
  tabScroller.setAttribute('class', 'mdc-tab-scroller');

  // Make tabScrollerSa
  let tabScrollerSa = document.createElement('div');
  tabScrollerSa.setAttribute('class', 'mdc-tab-scroller__scroll-area');

  // Make tabScrollerSc
  let tabScrollerSc = document.createElement('div');
  tabScrollerSc.setAttribute('class', 'mdc-tab-scroller__scroll-content');


  // Build tabs for menu, passing in the tab name we want and index
  let aboutTab = makeTab('hours', 0);
  let menuTab = makeTab('menu', 1);
  let manifestoTab = makeTab('manifesto', 2);
  let contactTab = makeTab('contact', 3);


  // Add new buttons to our
  tabScrollerSc.appendChild(aboutTab);
  tabScrollerSc.appendChild(menuTab);
  tabScrollerSc.appendChild(manifestoTab);
  tabScrollerSc.appendChild(contactTab);
  // Add the Sc to the Sa
  tabScrollerSa.appendChild(tabScrollerSc);
  // Add the Sa to the Scroller
  tabScroller.appendChild(tabScrollerSa);
  // Add scroller to tab/nav Bar
  tabBar.appendChild(tabScroller);

  // Add our completed nav/tab Bar to the content div passed in.
  content.appendChild(tabBar);

}

export default navLoad;