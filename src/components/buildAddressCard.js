import {
  buildArticleCard,
} from './article';
import {
  colorPicker,
} from '../components/colors';

const buildAddressCard = (article) => {
  let addressText = document.createElement('pre');
  addressText =
    "       4930 Ross St.\n" +
    "Red Deer, AB T4N 1X7\n" +
    "\n" +
    "            Phone:\n" +
    "      403-392-3046\n" +
    "            Email:\n" +
    "eat@tribeflatout.com\n"


  let addressCard = buildArticleCard('Address', addressText, colorPicker(1));
  article.appendChild(addressCard);
}

export default buildAddressCard;
