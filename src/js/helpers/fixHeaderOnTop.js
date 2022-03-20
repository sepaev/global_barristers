function fixHeaderOnTop(screenHistory, currentScreenPosition, topMenuHeight, refs) {
  const { headerRef, preHeaderRef } = refs;
  let { lastScreenPosition, lastScreenDirection } = screenHistory;
  //anti loop effect
  if (Math.abs(lastScreenPosition - currentScreenPosition) <= 35)
    return { lastScreenPosition: currentScreenPosition, lastScreenDirection };
  //main code
  if (lastScreenPosition < currentScreenPosition) {
    if (lastScreenDirection !== 'moving down') {
      headerRef.style.top = '-' + topMenuHeight + 'px';
      preHeaderRef.style.height = headerRef.getBoundingClientRect().height - topMenuHeight + 'px';
      lastScreenDirection = 'moving down';
    }
  } else {
    if (!currentScreenPosition) {
      if (lastScreenDirection !== 'on the roof') {
        headerRef.style.top = '0px';
        preHeaderRef.style.height = headerRef.getBoundingClientRect().height + 'px';
        lastScreenDirection = 'on the roof';
      }
    } else {
      if (lastScreenDirection !== 'moving up') {
        headerRef.style.top = '0px';
        preHeaderRef.style.height = headerRef.getBoundingClientRect().height + 'px';
        lastScreenDirection = 'moving up';
      }
    }
  }
  return { lastScreenPosition: currentScreenPosition, lastScreenDirection };
}

export default fixHeaderOnTop;
