function normalizeLocation(pathArray) {
  let [_, path, language] = pathArray;
  if (!language) language = 'uk';
  if (!path) path = 'home';

  if (path === 'uk' || path === 'en' || path === 'ru') {
    language = path;
    path = 'home';
  }

  language = language.toString().toLowerCase();
  path = path.toString().toLowerCase();
  if (language != 'ru') language = language === 'en' ? 'en' : 'uk';
  return [path, language];
}
export default normalizeLocation;
