const filter = document.querySelector('.filter');
const cardSet = document.querySelector('.card-set');
const arrayofCards = [...cardSet.children];
function onFilterClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const activeEl = filter.querySelector('.filter__button--active');
  activeEl.classList.remove('filter__button--active');
  e.target.classList.add('filter__button--active');
  createFilterTag();
}

filter.addEventListener('click', onFilterClick);
function createFilterTag() {
  const activeFilter = filter.querySelector('.filter__button--active');
  const filterTag = activeFilter.dataset.value;
  renderCardSet(filterTag);
}
function renderCardSet(filterTag) {
  cardSet.innerHTML = '';
  newSet = arrayofCards.filter(
    li => li.querySelector('p.project-card__text').textContent === filterTag
  );
  if (filterTag === 'Усі') {
    cardSet.append(...arrayofCards);
  } else cardSet.append(...newSet);
}
