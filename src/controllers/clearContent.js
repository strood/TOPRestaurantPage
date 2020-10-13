// Reset #content for new page, returns our new content section to render in
const clearContent = (body) => {
  // Grab old content and delete if present
  const oldContent = document.querySelector('#content');
  if (oldContent) {
    body.removeChild(oldContent);
  }
  // Build and add new contact, returning it so we can render in it
  const newContent = document.createElement('main');
  newContent.setAttribute('id', 'content');
  const footer = document.querySelector('footer');
  body.insertBefore(newContent, footer);

  return newContent;
};

export default clearContent;
