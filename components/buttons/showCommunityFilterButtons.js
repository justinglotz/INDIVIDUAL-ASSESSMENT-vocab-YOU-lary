import renderToDOM from '../../utils/renderToDom';

const showCommunityFilterButtons = (array) => {
  let filterBtnString = `
  <button class="btn btn-success filter-btn btn-lg mb-4" id="all-community-btn">All Entries</button>
  <button class="btn btn-success filter-btn btn-lg mb-4" id="alphabetical-sort-community-btn">Sort A-Z</button>`;
  array.forEach((item) => {
    filterBtnString += `
    <button class="btn btn-success filter-btn btn-lg mb-4" id="filter-community-btn--${item.category}">${item.category}</button>`;
  });
  renderToDOM('#add-button', filterBtnString);
};

export default showCommunityFilterButtons;
