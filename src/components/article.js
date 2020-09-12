const renderArticle = (content) => {
  let article = document.createElement('article');
  article.setAttribute('class', 'hours-article')
  content.appendChild(article);
}


const buildArticleCard = () => {
  // Maybe do buildArticleCard an dspit one out
}

const renderArticleTitle = (text, color) => {
  let article = document.querySelector('article');
  let title = document.createElement('h2');

  title.innerHTML = " - " + text + " - ";
  title.style.color = color;

  article.appendChild(title);
}

export {
  renderArticle,
  buildArticleCard,
  renderArticleTitle,
}
