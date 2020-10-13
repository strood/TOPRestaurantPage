const refreshMenu = (menu) => {
  // Grab article to build menus in
  const menuArticle = document.querySelector('.menus-article');

  // Empty existing menu if there
  if (document.querySelector('.menu-holder')) {
    // Remove menu-holder if one exists already
    menuArticle.removeChild(menuArticle.childNodes[0]);
  }
  // Append the fresh menu-holder passed in.
  menuArticle.insertBefore(menu, menuArticle.childNodes[0]);
};

export default refreshMenu;
