import {
  buildArticleCard,
} from './article';
import {
  colorPicker,
} from '../components/colors';

const buildHoursCard = (article) => {
  let hoursText = document.createElement('pre');
  hoursText =
    "                       Tuesday:\n" +
    "           11:30 a.m. – 2:30 p.m.\n" +
    "\n" +
    "             Wed, Thurs, Fri, Sat:\n" +
    "               11:30 a.m. – LATE\n" +
    "\n" +
    "Happy Hour: 2:30 p.m. – 4:30 p.m.";


  let hoursCard = buildArticleCard('Hours', hoursText, colorPicker(1));
  article.appendChild(hoursCard);
}

export default buildHoursCard;
