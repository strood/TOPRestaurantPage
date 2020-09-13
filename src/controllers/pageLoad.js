import renderNav from '../components/renderNav';
import {renderFooter} from '../components/footer';
import displayController from './displayController';
import {MDCTabBar} from '@material/tab-bar';

// Basic page element setup, load nav and activate our landing page
const pageLoad = (i = 0) => {

  // Whole page holder
  const body = document.querySelector('body');

  // renderNav will setup listener and navbar, we will activate once page setup below.
  renderNav(body);

  // Main content body --TODO: Turn this *make main* action into constructor
  const content = document.createElement('main');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  // renderFooter will build and append footer to body element
  renderFooter(body);

  // Add listener to body that will call our display controller when it hears
  // a tab activated event and pass along info from event
  body.addEventListener('MDCTabBar:activated', (e) => {
    // Pass along index of event to controller ot render associated body
    displayController(e.detail.index);
  })

  // Grab tabBar and activate our desired landing page (Hours in our case)
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.activateTab(i); //trigger default activate on load.

}

export default pageLoad;
