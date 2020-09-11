const clearFrame = (content) => {
  // Grab frame
  let frame = document.querySelector('.frame')
  // If it exists, remove it
  if (frame) {
    content.removeChild(frame);
  }

}

export default clearFrame;
