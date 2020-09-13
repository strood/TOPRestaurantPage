// Import methods/functionality
import pageLoad from './controllers/pageLoad';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// On pageload, check url to see if page queried, navigate to given page, or hours
//  as default
const queryString = window.location.search;
// ?product=shirt&color=blue&newuser&size=m - Example of returned text

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
