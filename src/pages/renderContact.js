import renderFrame from './renderFrame';


const renderContact = (content) => {
  // Render new frame for content
  let frame = renderFrame();

  //
  frame.innerHTML = "Incomplete feature -  Contact Page";

  // Append newly made frame to content
  content.appendChild(frame)

}

export default renderContact;
