'use strict';

const button = document.querySelector('.page-hero__link');
const skillsContainer = document.querySelector('.skills');
const projectsContainer = document.querySelector('.projects');
const footerSocialContainer = document.querySelector('.footer__socilal');

const scrollToSkills = function () {
  window.scrollTo({
    top: skillsContainer.offsetTop,
    behavior: 'smooth',
  });
};

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function inViewport(element) {
  if (!element) return false;
  if (1 !== element.nodeType) return false;

  const html = document.documentElement;
  const rect = element.getBoundingClientRect();

  return !!rect && rect.bottom >= 0 && rect.right >= 0 && rect.left <= html.clientWidth && rect.top <= html.clientHeight;
}

button.addEventListener('click', scrollToSkills);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY < 100 || inViewport(footerSocialContainer)) {
    button.classList.remove('page-hero__link--hide');
  }

  if (scrollY > 100 && !inViewport(footerSocialContainer)) {
    button.classList.add('page-hero__link--hide');
  }

  if (inViewport(footerSocialContainer)) {
    button.classList.add('page-hero__link--rotate');
    button.removeEventListener('click', scrollToSkills);
    button.addEventListener('click', scrollToTop);
  } else {
    button.classList.remove('page-hero__link--rotate');
    button.removeEventListener('click', scrollToTop);
    button.addEventListener('click', scrollToSkills);
  }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.projects-list__item');

for (let elm of elements) {
  observer.observe(elm);
}
