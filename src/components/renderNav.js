import buildTab from './builders/buildTab';

const renderNav = (content) => {
  // Construct a matrial-ui tab nav style navbar and add to content element
  // passed in

  // Make tabBar
  const tabBar = document.createElement('div');
  tabBar.setAttribute('class', 'mdc-tab-bar');
  tabBar.setAttribute('role', 'tablist');

  // Make tabScroller
  const tabScroller = document.createElement('div');
  tabScroller.setAttribute('class', 'mdc-tab-scroller');

  // Make tabScrollerSa
  const tabScrollerSa = document.createElement('div');
  tabScrollerSa.setAttribute('class', 'mdc-tab-scroller__scroll-area');

  // Make tabScrollerSc
  const tabScrollerSc = document.createElement('div');
  tabScrollerSc.setAttribute('class', 'mdc-tab-scroller__scroll-content');

  // Build tabs for menu, passing in the tab name we want and index
  const aboutTab = buildTab('hours', 0);
  const menusTab = buildTab('menus', 1);
  const manifestoTab = buildTab('manifesto', 2);
  const contactTab = buildTab('contact', 3);

  // Add new buttons to our
  tabScrollerSc.appendChild(aboutTab);
  tabScrollerSc.appendChild(menusTab);
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
};

export default renderNav;
