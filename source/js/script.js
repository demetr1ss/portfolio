const skillsContainer = document.querySelector('.skills');
const projectsContainer = document.querySelector('.projects');
const footerSocialContainer = document.querySelector('.footer__socilal');

const scrollTo = (target) => {
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth',
  });
};

const inViewport = (element) => {
  if (!element) return false;
  if (1 !== element.nodeType) return false;

  const html = document.documentElement;
  const rect = element.getBoundingClientRect();

  return !!rect && rect.bottom >= 0 && rect.right >= 0 && rect.left <= html.clientWidth && rect.top <= html.clientHeight;
};

const hideButtonClass = 'page-hero__link--hide';
const rotateButtonClass = 'page-hero__link--rotate';

const scrollHandler = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY < 100 || inViewport(footerSocialContainer)) {
    button.classList.remove(hideButtonClass);
  }

  if (scrollY > 100 && !inViewport(footerSocialContainer)) {
    button.classList.add(hideButtonClass);
  }

  if (inViewport(footerSocialContainer)) {
    button.classList.add(rotateButtonClass);
    button.removeEventListener('click', handleClick);
    button.addEventListener('click', () => scrollTo(document.body));
  } else {
    button.classList.remove(rotateButtonClass);
    button.removeEventListener('click', () => scrollTo(document.body));
    button.addEventListener('click', handleClick);
  }
};

const button = document.querySelector('.page-hero__link');
const handleClick = () => scrollTo(skillsContainer);
button.addEventListener('click', handleClick);

window.addEventListener('scroll', scrollHandler);
