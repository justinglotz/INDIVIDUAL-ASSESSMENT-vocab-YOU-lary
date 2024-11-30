import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addCategoryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}" class="mb-4">
    <div class="form-group">
      <label for="image">Category Name</label>
      <input type="text" class="form-control" id="categoryName" placeholder="Category Name" value="${obj.categoryName || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit Category</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addCategoryForm;
