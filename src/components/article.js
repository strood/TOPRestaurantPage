// Render an article holder
const renderArticle = (content) => {
  let article = document.createElement('article');
  article.setAttribute('class', 'article');
  content.appendChild(article);
}

// Create a standard title + body card in page color, return built card
const buildArticleCard = (title, text, color) => {
  const holder = document.createElement('div');
  holder.setAttribute('class', 'article-card');
  const head = document.createElement('h3');
  const body = document.createElement('pre');
  head.innerHTML = title;
  body.innerHTML = text;
  head.style.color = color;
  holder.appendChild(head);
  holder.appendChild(body);

  return holder;
}

// Append title to artice object.
const renderArticleTitle = (text, color) => {
  let article = document.querySelector('article');
  let title = document.createElement('h3');

  title.innerHTML = " - " + text + " - ";
  title.style.color = color;

  article.appendChild(title);
}

export {
  renderArticle,
  buildArticleCard,
  renderArticleTitle,
}
