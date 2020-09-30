"use strict";
// Import methods/functionality
import pageLoad from './controllers/pageLoad';

// Import styles
import './style/reset.scss';
import './style/style.scss';
import '@fortawesome/fontawesome-free/js/all'

// On pageload, check url to see if page queried, navigate to given page, or hours
//  as default
const queryString = window.location.search;

// Switch through options in query string
switch (queryString) {
  case ('?hours'):
    pageLoad(0);
    break;
  case ('?menus'):
    pageLoad(1);
    break;
  case ('?manifesto'):
    pageLoad(2);
    break;
  case ('?contact'):
    pageLoad(3);
    break;
  default:
  document.onload = pageLoad(0);
}
