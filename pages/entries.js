import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import showFilterButtons from '../components/buttons/filterButtons';

const showEntries = (array) => {
  clearDom();

  showFilterButtons(array);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">Category: ${item.category}</h5>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="edit-entry-btn--${item.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="delete-entry-btn--${item.firebaseKey}">Delete</a>
        </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};

const showPublicEntries = (array) => {
  clearDom();

  showFilterButtons(array);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">Category: ${item.category}</h5>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="edit-entry-btn--${item.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="delete-entry-btn--${item.firebaseKey}">Delete</a>
          <a href="#" class="card-link" id="copy-entry-btn--${item.firebaseKey}">Copy</a>
        </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};

export {
  showEntries,
  showPublicEntries
};
