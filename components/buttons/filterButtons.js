import renderToDOM from '../../utils/renderToDom';

const showFilterButtons = (array) => {
  let filterBtnString = `
  <button class="btn btn-success filter-btn btn-lg mb-4" id="all-btn">All Entries</button>
  <button class="btn btn-success filter-btn btn-lg mb-4" id="alphabetical-sort-btn">Sort A-Z</button>`;
  array.forEach((item) => {
    filterBtnString += `
    <button class="btn btn-success filter-btn btn-lg mb-4" id="filter-btn--${item.categoryName}">${item.categoryName}</button>`;
  });
  renderToDOM('#add-button', filterBtnString);
};

export default showFilterButtons;
