import renderToDOM from '../../utils/renderToDom';

const showCommunityFilterButtons = (array) => {
  let filterBtnString = `
  <button class="btn btn-success filter-btn btn-lg mb-4" id="all-community-btn">All Entries</button>
  <button class="btn btn-success filter-btn btn-lg mb-4" id="alphabetical-sort-community-btn">Sort A-Z</button>`;
  const seen = new Set();
  array.forEach((item) => {
    if (seen.has(item.category)) {
      return;
    }
    filterBtnString += `
    <button class="btn btn-success filter-btn btn-lg mb-4" id="filter-community-btn--${item.category}">${item.category}</button>`;
    seen.add(item.category);
  });
  renderToDOM('#add-button', filterBtnString);
};

export default showCommunityFilterButtons;
