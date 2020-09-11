// Make and set attributes for a frame to hold our content.
const renderFrame = () => {
  let frame = document.createElement('div');
  frame.setAttribute('class', 'frame');
  return frame
}

export default renderFrame;
