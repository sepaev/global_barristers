const screenBottom = document.documentElement.clientHeight;
const completeText = 'all elements was animated';

function activateAnimation(targets = [], filtred = []) {
  if (targets[0] === completeText) return targets;
  if (!targets.length) {
    targets = document.querySelectorAll('.jsActivateAnimation');
    if (!targets.length) return [];
  }
  targets.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if (elementTop > 0 && elementTop < screenBottom) {
      element.style.animationName = element.dataset.animation;
    } else if (elementBottom > 0 && elementBottom < screenBottom) {
      element.style.animationName = element.dataset.animation;
    } else {
      filtred.push(element);
    }
  });
  if (!filtred.length) return [completeText];

  return filtred;
}

export default activateAnimation;
