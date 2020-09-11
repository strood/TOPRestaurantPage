// Import methods/functionality
import pageLoad from './pageLoad';

// Import styles
import './style/reset.scss';
import './style/style.scss';


// On initial page load, do our default setup, which will choose our landing page
// and add listeners for further nav
document.onload = pageLoad();
