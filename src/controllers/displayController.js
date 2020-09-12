// Imports
import renderHours from '../pages/renderHours';
import renderMenus from '../pages/renderMenus';
import renderManifesto from '../pages/renderManifesto';
import renderContact from '../pages/renderContact';

import clearContent from './clearContent';

// Given the index of the page, call approproate render function, passing
// in the main body content it will render to.
const displayController = (index) => {

  // Reset #content for new page, returns our new content section
  const body = document.querySelector('body');
  let newContent = clearContent(body);

  // Scroll to top of page
  window.scrollTo(0, 0);
  // Render page based on index
  switch (index) {
    case (0):
      renderHours(newContent);
      break;
    case (1):
      renderMenus(newContent);
      break;
    case (2):
      renderManifesto(newContent);
      break;
    case (3):
      renderContact(newContent);
      break;
  }
}

export default displayController;
