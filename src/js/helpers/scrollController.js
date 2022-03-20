import activateAnimation from './activateAnimation';
import fixHeaderOnTop from './fixHeaderOnTop';
import btnGoTopController from './btnGoTopController';
import getRefs from './getRefs';
import { throttle } from 'throttle-debounce';
const screenBottom = document.documentElement.clientHeight;

let { header, topMenu, btnGoTop, preHeader } = getRefs();
const topMenuHeight = topMenu.getBoundingClientRect().height;
let nonAnimatedElements = [];
let screenHistory = {
  lastScreenPosition: 0,
  lastScreenDirection: '',
};

function scrollController() {
  window.addEventListener(
    'scroll',
    throttle(200, false, function () {
      const currentScreenPosition = window.pageYOffset;
      //show button go top
      btnGoTopController(currentScreenPosition, screenBottom, btnGoTop);
      //sticky header
      screenHistory = fixHeaderOnTop(screenHistory, currentScreenPosition, topMenuHeight, {
        headerRef: header,
        preHeaderRef: preHeader,
      });
      //animation on scroll
      nonAnimatedElements = activateAnimation(nonAnimatedElements);
    }),
  );
  btnGoTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

export default scrollController;
