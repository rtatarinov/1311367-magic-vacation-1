// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import screen from './modules/screen.js';
import rules from './modules/rules.js';
import prizes from './modules/prizes.js';
import textAnimation from './modules/textAnimation.js';
import FullPageScroll from './modules/full-page-scroll';
import hashchange from './modules/hashchange';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
screen();
rules();
prizes();
textAnimation();
hashchange();

const fullPageScroll = new FullPageScroll();

fullPageScroll.init();
