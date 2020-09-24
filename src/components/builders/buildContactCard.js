"use strict";

import Phone from '../../img/call-black-18dp.svg';
import {
  buildArticleCard,
} from '../article';
import {
  colorPicker,
} from '../colors';

const buildContactCard = (article) => {
  let tel = "+1 403-392-3046";
  let email = "eat@tribeflatout.com"
  // Create text elements
  let contactText = document.createElement('pre');
  contactText =
    "           To make a reservation by phone, call:\n" +
    `                          ${tel} ` +
    `<a href=tel:${tel}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg></a>` +
    "\n" +
    "\n" +
    "                      Or to reserve by email:\n" +
    `                      ${email}` +
    `<a href=mailto:${email}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>` +
    "\n" +
    "Or, just send us a message using the form below:";

    let contactCard = buildArticleCard('- Details -', contactText, colorPicker(4));

    article.appendChild(contactCard);
}

export default buildContactCard;
