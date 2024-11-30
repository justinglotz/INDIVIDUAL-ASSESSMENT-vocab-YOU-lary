import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectCategory from './selectCategory';

const addEntryForm = (obj, user) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="title">Entry Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="entryTitle"
      placeholder="Entry Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
    <div class="form-group" id="select-category">
    </div>
    <button type="submit" class="btn btn-primary">Submit Entry
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
  selectCategory(`${obj.category || ''}`, user);
};

export default addEntryForm;
