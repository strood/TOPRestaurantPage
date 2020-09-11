import renderFrame from './renderFrame';

const renderMenus = (content) => {
  // Render new frame for content
  let frame = renderFrame();

  //
  frame.innerHTML = "Incomplete feature - Menu Page";

  // Append newly made frame to content
  content.appendChild(frame)
}

export default renderMenus;
