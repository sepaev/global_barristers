import normalizeLocation from '../helpers/normalizeLocation';
import logo from '../../images/svg/logo.svg';
import getRefs from '../helpers/getRefs';
import headerHBS from './common/header.hbs';
import getHost from '../helpers/getHost';
const pages = {
  home: import('./home'),
};
const { HOST } = getHost();

async function route() {
  const { main, btnGoTop, header, langs } = getRefs();
  const [path, language] = normalizeLocation(document.location.pathname.split('/'));
  header.insertAdjacentHTML('beforeend', headerHBS({ lang: language, logo, HOST }));
  langs[language].classList.add('active');
  const template = await pages[path];
  if (!template) {
    main.innerHTML = (await import('./notFound')).default(language);
  } else {
    template.default.forEach(writeHtml => {
      btnGoTop.insertAdjacentHTML('beforebegin', writeHtml(language));
    });
  }
}

export default route;
