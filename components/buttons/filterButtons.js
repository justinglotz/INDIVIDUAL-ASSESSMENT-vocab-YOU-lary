import renderToDOM from '../../utils/renderToDom';

const showFilterButtons = (array) => {
  let filterBtnString = `
  <button class="btn btn-success filter-btn btn-lg mb-4" id="all-btn">All Entries</button>`;
  const seen = new Set();
  array.forEach((item) => {
    if (seen.has(item.category)) {
      return;
    }
    filterBtnString += `
    <button class="btn btn-success filter-btn btn-lg mb-4" id="filter-btn--${item.category}">${item.category}</button>`;
    seen.add(item.category);
  });
  renderToDOM('#add-button', filterBtnString);
};

export default showFilterButtons;
