// Imports
import navLoad from './nav/navLoad';
import displayController from './displayController';
import {MDCTabBar} from '@material/tab-bar';


// Basic page element setup, load nav and activate our landing page
const pageLoad = () => {
  // Whole page holder
  const body = document.querySelector('body');
  // navLoad will setup listener and navbar, we will activate once page setup below.
  navLoad(body);
  // Main content body
  const content = document.createElement('main');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  // Add listener to body that will call our display controller when it hears
  // a tab activated event and pass along info from event
  body.addEventListener('MDCTabBar:activated', (e) => {
    // Pass along index of event to controller ot render associated body
    displayController(e.detail.index);
  })

  // Grab tabBar and activate our desired landing page (Hours in our case)
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.activateTab(0); //trigger default activate on load.
}



// Exports
export default pageLoad;
