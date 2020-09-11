import renderFrame from './renderFrame';

const renderManifesto = (content) => {
  // Render new frame for content
  let frame = renderFrame();

  //
  frame.innerHTML = "Incomplete feature - Manifesto Page";

  // Append newly made frame to content
  content.appendChild(frame)

}

export default renderManifesto;
