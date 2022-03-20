function btnGoTopController(currentScreenPosition, screenBottom, btnGoTop) {
  if (currentScreenPosition > screenBottom) {
    btnGoTop.style.opacity = '1';
    btnGoTop.style.pointerEvents = 'initial';
  } else {
    btnGoTop.style.opacity = '0';
    btnGoTop.style.pointerEvents = 'none';
  }
}

export default btnGoTopController;
