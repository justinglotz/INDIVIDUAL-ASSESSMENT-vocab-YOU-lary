// import getCategories from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = () => {
  const domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="" selected>Select a Category</option>
    <option value="Tech">Tech</option>
    <option value="Finance">Finance</option>
    </select>`;

  renderToDOM('#select-category', domString);
};

export default selectCategory;

// getCategories().then((categoriesArray) => {
//   categoriesArray.forEach((category) => {
//     domString += `
//       <option
//         value="${category.firebaseKey}"
//         ${categoryId === category.firebaseKey ? 'selected' : ''}>
//           ${category.categoryName}
//         </option>`;
//   });

//   domString += '</select>';
