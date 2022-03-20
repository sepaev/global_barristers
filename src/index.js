import './sass/main.scss';
import route from './js/route';
import scrollController from './js/helpers/scrollController';

async function mainAsyncFunction() {
  await route();

  scrollController();
}

mainAsyncFunction();
