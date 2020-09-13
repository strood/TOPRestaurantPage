import {
  buildArticleCard,
} from '../article';
import {
  colorPicker,
} from '../colors';

// Build address card for hours page, append to given article
const buildAddressCard = (article) => {
  // Create text elements
  let addressText = document.createElement('pre');
  addressText =
    "       4930 Ross St.\n" +
    "Red Deer, AB T4N 1X7\n" +
    "\n" +
    "            Phone:\n" +
    "      403-392-3046\n" +
    "            Email:\n" +
    "eat@tribeflatout.com\n"

  // Build and append card
  let addressCard = buildArticleCard('- Address -', addressText, colorPicker(1));
  article.appendChild(addressCard);

}

export default buildAddressCard;
