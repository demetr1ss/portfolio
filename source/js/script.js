const skillsContainer = document.querySelector('.skills');
const projectsContainer = document.querySelector('.projects');
const footerSocialContainer = document.querySelector('.footer__socilal');
const titles = document.querySelectorAll('.title');
const toggleButton = document.querySelector('.nav__toggle');

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
    button?.classList.remove(hideButtonClass);
  }

  if (scrollY > 100 && !inViewport(footerSocialContainer)) {
    button?.classList.add(hideButtonClass);
  }

  if (inViewport(footerSocialContainer)) {
    button?.classList.add(rotateButtonClass);
    button?.removeEventListener('click', handleClick);
    button?.addEventListener('click', () => scrollTo(document.body));
  } else {
    button?.classList.remove(rotateButtonClass);
    button?.removeEventListener('click', () => scrollTo(document.body));
    button?.addEventListener('click', handleClick);
  }
};

const button = document.querySelector('.page-hero__link');
const handleClick = () => scrollTo(skillsContainer);
button?.addEventListener('click', handleClick);

window.addEventListener('scroll', scrollHandler);

function titleClickHandler(e) {
  const block = e.target.parentElement;

  if (block.classList.contains('block--opened')) {
    block.classList.remove('block--opened');
  } else {
    block.classList.add('block--opened');
  }
}

titles.forEach((title) => {
  title.addEventListener('click', titleClickHandler);
});

toggleButton?.addEventListener('click', (e) => {
  const nav = e.target?.parentElement;

  const closeMenu = () => {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
    window.removeEventListener('click', outsideClickListener);
  };

  const openMenu = () => {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    window.addEventListener('click', outsideClickListener);
  };

  function outsideClickListener(event) {
    var target = event.target;

    if (nav.contains(target)) {
    } else {
      closeMenu();
    }
  }

  if (nav.classList.contains('nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});
