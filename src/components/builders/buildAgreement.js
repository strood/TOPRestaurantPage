// Build agreement section and append to passed in article
const buildAgreement = (article) => {
  // Setup text sections
  let text = document.createElement('p');
  let ul = document.createElement('ul');

  // List of agreements to be added to page
  const agreements = ["Pretend it’s 1970; Cell phones don’t exist and we take our hats off inside.",
    "Say one thing that turns you on about life.",
    "Notice how sexy your server is, flirt a little.",
    "Dream about a foreign country you’d like to visit.",
    "Conjugate ‘tribe’ into an adverb and adjective, then use it in a clever sentence.",
    "Take a moment to appreciate, embrace your tribe with a toast.",
    "Be uninhibited for a few moments… in a kind way.",
    "Use expressive language. If you must swear, the tribe charge is $20 a word if any one overhears."
  ];

  // Build text sections
  text.innerHTML = "Don't think of these as house rules, so much as strong suggestions " +
    "as to how you might make your time here with us a thing of beauty.";

  // Add agreements to ul in article as li
  for (var i = 0; i < agreements.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = agreements[i];
    ul.appendChild(li);
  }

  // Add items to article.
  article.appendChild(text);
  article.appendChild(ul);
}

export default buildAgreement;
