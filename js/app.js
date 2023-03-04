const section1Li = document.querySelectorAll(
  '#section1-container .section1-content ul li'
);
const sectionOne = document.querySelector('#section-one');

const section3SmallItem = document.querySelectorAll(
  '.section-three .section3-item .section3-small-item'
);
const sectionThree = document.querySelector('.section-three');

// section one effect
const sec1Fun = function (enteries, observer) {
  const [entery] = enteries;
  if (!entery.isIntersecting) return;
  section1Li.forEach((li) => {
    li.style.opacity = '1';
    li.style.transform = 'translateX(0)';
  });
  observer.unobserve(entery.target);
};

const sec1Obvserver = new IntersectionObserver(sec1Fun, {
  root: null,
  threshold: 0.4,
});

sec1Obvserver.observe(sectionOne);

// section three effect
const sec3Fun = (enteries, observer) => {
  const [entery] = enteries;
  if (!entery.isIntersecting) return;
  section3SmallItem.forEach((item) => {
    item.style.opacity = '1';
    item.style.transform = 'translateX(0)';
  });
  observer.unobserve(entery.target);
};

const sec3Observer = new IntersectionObserver(sec3Fun, {
  root: null,
  threshold: 0.4,
});

sec3Observer.observe(sectionThree);
