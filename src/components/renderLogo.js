import Logo from '../img/logo.jpg';

const renderLogo = (content) => {
  const img = document.createElement('div');
  img.setAttribute('class', 'logo-div');
  img.style.backgroundImage = `url(${Logo})`;
  content.appendChild(img);
};

export default renderLogo;
