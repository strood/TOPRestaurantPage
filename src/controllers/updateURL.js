import {MDCTabBar} from '@material/tab-bar';

// Update url to current tab name
const updateURL = (index) => {
  // grab tab bar, and extract name from tab we are navigating to
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  let tabName = tabBar.tabList_[index].content_.firstElementChild.innerText.toLowerCase()
  // Update url with name
  window.history.pushState('', '', `?${tabName}`);
}

export default updateURL;
