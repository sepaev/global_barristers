import getHost from './getHost';
function normalizeLocation(pathArray) {
  const { gitUrl } = getHost();
  let path;
  let language;
  // git url correction
  if (pathArray[1] === gitUrl) {
    path = pathArray[2];
    language = pathArray[3];
  } else {
    path = pathArray[1];
    language = pathArray[2];
  }
  // end correction
  if (!language) language = 'uk';
  if (!path) path = 'home';

  if (path === 'uk' || path === 'en' || path === 'ru') {
    language = path;
    path = 'home';
  }

  language = language.toString().toLowerCase();
  path = path.toString().toLowerCase();
  if (language != 'ru') language = language === 'en' ? 'en' : 'uk';
  console.log(language);
  return [path, language];
}
export default normalizeLocation;
