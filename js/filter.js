const filter = document.querySelector('.filter');
console.log(filter);
function onFilterClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const activeEl = filter.querySelector('.filter__button--active');
  activeEl.classList.remove('filter__button--active');
  e.target.classList.add('filter__button--active');
}

filter.addEventListener('click', onFilterClick);
