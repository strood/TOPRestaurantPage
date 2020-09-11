// Imports
import renderHours from './pages/renderHours';
import renderMenus from './pages/renderMenus';
import renderManifesto from './pages/renderManifesto';
import renderContact from './pages/renderContact';
import clearFrame from './clearFrame';

// Given the index of the page, call approproate render function, passing
// in the main body content it will render to.
const displayController = (index) => {
  const content = document.querySelector('#content');
  // Frames exist in content to hold info, remove current frame to render new
  clearFrame(content);
  switch (index) {
    case (0):
      renderHours(content);
      break;
    case (1):
      renderMenus(content);
      break;
    case (2):
      renderManifesto(content);
      break;
    case (3):
      renderContact(content);
      break;
  }
}

export default displayController;
