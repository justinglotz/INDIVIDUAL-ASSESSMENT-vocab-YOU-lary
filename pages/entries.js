import renderToDOM from '../utils/renderToDom';
import keepFilterButtonsOnDom from '../utils/keepFilterButtonsOnDom';

const showEntries = (array) => {
  keepFilterButtonsOnDom();
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

const showPublicEntries = (array, user) => {
  // If the UID doesn't match the UID of the user currently logged in, Copy button renders and edit and delete buttons don't
  // If the UID does match the UID of the user currently logged in, Edit button renders and copy button doesn't
  // OR Render cards that are set to public and the UID doesn't match your own
  keepFilterButtonsOnDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">Category: ${item.category}</h5>
          <p class="card-text">${item.definition}</p>
          ${
  user.uid === item.uid
    ? `<a href="#" class="card-link" id="edit-entry-btn--${item.firebaseKey}">Edit</a>
  <a href="#" class="card-link" id="delete-entry-btn--${item.firebaseKey}">Delete</a>
    `
    : `<a href="#" class="card-link" id="copy-entry-btn--${item.firebaseKey}">Copy</a>
    `
}     
        </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};

export {
  showEntries,
  showPublicEntries
};
