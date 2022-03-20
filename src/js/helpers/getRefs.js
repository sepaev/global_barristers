function getRefs() {
  const refs = {
    main: document.querySelector('.main'),
    btnGoTop: document.querySelector('.goTop'),
    header: document.querySelector('.header'),
    preHeader: document.querySelector('.header__pre'),
    topMenu: document.querySelector('.top-menu'),
    navigation: document.querySelector('.navigation'),
    langs: {
      uk: document.querySelector('.lang_uk'),
      ru: document.querySelector('.lang_ru'),
      en: document.querySelector('.lang_en'),
    },
  };
  return refs;
}

export default getRefs;
